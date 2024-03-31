// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   const url = req.url === '/' ? '/index.js' : req.url; // Default to index.js
//   const filePath = path.join(__dirname, url);

//   fs.stat(filePath, (err, stats) => {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.end('404 Not Found');
//       return;
//     }

//     if (stats.isDirectory()) {
//       serveDirectory(res, filePath);
//     } else {
//       serveFile(res, filePath);
//     }
//   });
// });

// function serveDirectory(res, dirPath) {
//     fs.readdir(dirPath, (err, files) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Internal Server Error');
//         return;
//       }
  
//       // Check if "__tests__" is present in the list of files
//       const containsTests = files.includes("__tests__");
  
//       const items = files.map(file => {
//         const itemPath = path.join(dirPath, file);
//         const isDirectory = fs.statSync(itemPath).isDirectory();
//         const icon = isDirectory ? '&#128193;' : '&#128441;';
//         return `<li><a href="${file}">${icon} ${file}</a></li>`;
//       });
  
//       // Add a special message if "__tests__" is present
//       if (containsTests) {
//         items.push(`<li><strong>Special Message:</strong> This directory contains __tests__</li>`);
//       }
  
//       const html = generateHtml(items);
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(html);
//     });
//   }
  

// function serveFile(res, filePath) {
//   const stream = fs.createReadStream(filePath);
//   stream.on('open', () => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     stream.pipe(res);
//   });

//   stream.on('error', () => {
//     res.writeHead(500, { 'Content-Type': 'text/plain' });
//     res.end('Internal Server Error');
//   });
// }

// function generateHtml(items) {
//   return `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>File Server</title>
//       </head>
//       <body>
//         <ul>${items.join('')}</ul>
//       </body>
//     </html>
//   `;
// }

// // Export the server variable for testing
// module.exports = server;

// // Start the server on port 3000
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    fs.readdir(filePath, (err, files) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
      let response = '<ul>';
      files.forEach((file) => {
        const fileDir = path.join(filePath, file);
        const stats = fs.statSync(fileDir);
        if (stats.isDirectory()) {
          response += `<li><a href="${file}/">&#128193; ${file}</a></li>`;
        } else {
          response += `<li><a href="${file}">&#128441; ${file}</a></li>`;
        }
      });
      response += '</ul>';
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(response);
    });
  } else {
    fs.exists(filePath, (exists) => {
      if (!exists) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
      fs.stat(filePath, (err, stats) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }
        if (stats.isDirectory()) {
          fs.readdir(filePath, (err, files) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error');
              return;
            }
            let response = '<ul>';
            files.forEach((file) => {
              const fileDir = path.join(filePath, file);
              const stats = fs.statSync(fileDir);
              if (stats.isDirectory()) {
                response += `<li><a href="${file}/">&#128193; ${file}</a></li>`;
              } else {
                response += `<li><a href="${file}">&#128441; ${file}</a></li>`;
              }
            });
            response += '</ul>';

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(response);
          });
        } else {
          fs.readFile(filePath, (err, data) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error');
              return;
            }

            res.writeHead(200);
            res.end(data);
          });
        }
      });
    });
  }
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = server;