const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 7700;

const server = http.createServer((req, res) => {
  // Get the requested file path
  const filePath = path.join(__dirname, req.url);

  // Read the file or directory
  fs.stat(filePath, (err, stats) => {
    if (err) {
      // Handle 404 Not Found
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    if (stats.isDirectory()) {
      // Serve directory listing
      fs.readdir(filePath, (err, files) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }

        const listing = files
          .map((file) => `<li><a href="${path.join(req.url, file)}">${file}</a></li>`)
          .join("");
        const html = `<html><body><ul>${listing}</ul></body></html>`;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else {
      // Serve file content
      fs.readFile(filePath, "utf-8", (err, fileContent) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(fileContent);
      });
    }
  });
});

// Export the server for testing
module.exports = server;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
