var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to Dominos!");
  } else if (req.url === "/contact") {
    const obj = {
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com"
    };
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404).end("page not found");
  }
}
//Create a Node Server that listens to PORT 8081.
httpServer.listen("8081", () => {
  console.log("Listening");
});
module.exports = httpServer;
