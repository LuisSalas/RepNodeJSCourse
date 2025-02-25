/**
 * Import the http module to create an HTTP server.
 */
const http = require("http");

const routes = require("./routes");

/**
 * Create an HTTP server that listens for requests and logs the request object to the console.
 *
 * @param {http.IncomingMessage} req - The request object.
 * @param {http.ServerResponse} res - The response object.
 */
const server = http.createServer(routes);

/**
 * The server listens on port 3000.
 */
server.listen(3000);
