/**
 * Import the http module to create an HTTP server.
 */
const http = require("http");

/**
 * Import the fs module to interact with the file system.
 */
const fs = require("fs");

/**
 * Create an HTTP server that listens for requests and logs the request object to the console.
 *
 * @param {http.IncomingMessage} req - The request object.
 * @param {http.ServerResponse} res - The response object.
 */
const server = http.createServer((req, res) => {
  const url = req.url; // Get the URL from the request object
  const method = req.method; // Get the method from the request object

  console.log(url, method); // Log the URL and method to the console

  if (url === "/") {
    res.write("<html>"); // Start the response body
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body>\
            <form action="/message" method="POST">\
                <input type="text" name="message">\
                <button type="submit">Send</button>\
            </form>\
        </body>'
    );
    res.write("</html>"); // End the response body
    return res.end(); // Send the response
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY"); // Write a file
    res.statusCode = 302; // Set the status code to 302 -> Redirect
    res.setHeader("location", "/"); // Set the response header
    return res.end(); // Send the response -> Redirect the user to the home page
  }

  // Set the response header
  res.setHeader("Content-Type", "text/html");
  // Start the response body
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write(
    "<body>\
        <h1>Hello from my Node.js Server!</h1>\
        <p>Welcome to my website!</p>\
    </body>"
  );
  res.write("</html>"); // End the response body
  res.end(); // Send the response
});

/**
 * The server listens on port 3000.
 */
server.listen(3000);
