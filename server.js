// Require dependencies
const http = require('http');
const fs = require('fs');

// Set our port to 8080
const PORT = 8080;

const tables = [];

const handleRequest = (req, res) => {
  // Capture the url the request is made to
  const path = req.url;

  // When we visit different urls, read and respond with different files
  switch (path) {
    case '/api/tables':
        req.on('data', data => {tables.push(data)})
        return res.json(true)
    case '/home':
      return fs.readFile(`${__dirname}/home.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });

    case '/reserve':
      return fs.readFile(`${__dirname}/reserve.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });

    case '/tables':
      return fs.readFile(`${__dirname}/tables.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });

    // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  }
};

// Create the server, assign it to a variable called "server"
const server = http.createServer(handleRequest);

// Starts our server.
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
