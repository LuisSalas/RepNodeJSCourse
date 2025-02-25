/**
 * Import the http module to create an HTTP server.
 */
const http = require("http");

/**
 * Create an HTTP server that listens for requests and logs the request object to the console.
 */
const server = http.createServer((req, res) => {
  console.log(req);
});

/**
 * The server listens on port 3000.
 */
server.listen(3000);
