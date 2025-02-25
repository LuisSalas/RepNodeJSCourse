/**
 * Import the http module to create an HTTP server.
 */
const http = require("http");

/**
 * Create an HTTP server that listens for requests and logs the request object to the console.
 */
const server = http.createServer((req, res) => {
  const url = req.url; // Get the URL from the request object
  if (url === "/") {
    res.write("<html>"); // Start the response body
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>"); // End the response body
    return res.end(); // Send the response
  }
  //console.log(req.url, req.method, req.headers);
  //process.exit(); // This will stop the server after the first request.
  res.setHeader("Content-Type", "text/html"); // Set the response header
  res.write("<html>"); // Start the response body
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>"); // End the response body
  res.end(); // Send the response
});

/**
 * The server listens on port 3000.
 */
server.listen(3000);
