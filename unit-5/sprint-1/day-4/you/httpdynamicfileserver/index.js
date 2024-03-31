// index.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.js' : req.url; // Default to index.js
  const filePath = path.join(__dirname, url);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      serveDirectory(res, filePath);
    } else {
      serveFile(res, filePath);
    }
  });
});

function serveDirectory(res, dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }

    const items = files.map(file => {
      const itemPath = path.join(dirPath, file);
      const isDirectory = fs.statSync(itemPath).isDirectory();
      const icon = isDirectory ? '&#128193;' : '&#128441;';
      return `<li><a href="${file}">${icon} ${file}</a></li>`;
    });

    const html = generateHtml(items);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  });
}

function serveFile(res, filePath) {
  const stream = fs.createReadStream(filePath);
  stream.on('open', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    stream.pipe(res);
  });

  stream.on('error', () => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
}

function generateHtml(items) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>File Server</title>
      </head>
      <body>
        <ul>${items.join('')}</ul>
      </body>
    </html>
  `;
}

// Export the server variable for testing
module.exports = server;

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
