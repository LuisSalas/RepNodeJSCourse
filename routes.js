/**
 * Import the fs module to interact with the file system.
 */
const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url; // Get the request URL
  const method = req.method; // Get the request method
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
    const reqBody = []; // Create an array to store the request body

    req.on("data", (chunk) => {
      reqBody.push(chunk); // Push the data chunks to the array
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(reqBody).toString(); // Concatenate the data chunks and convert to a string
      const message = parsedBody.split("=")[1]; // Extract the message from the parsed body
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; // Set the status code to 302 -> Redirect
        res.setHeader("location", "/"); // Set the response header
        return res.end(); // Send the response -> Redirect the user to the home page
      }); // Write a file
    }); // Listen for the end event
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
};

/**Ways to export the requestHandler function
 * module.exports = requestHandler;
 * module.exports = { handler: requestHandler };
 * module.exports.handler = requestHandler;
 * exports.handler = requestHandler;
 **/
module.exports = requestHandler;
