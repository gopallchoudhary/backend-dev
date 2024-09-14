import http from "http";
import fs from "fs";
import url from "url";

const myServer = http.createServer((req, res) => {
  let d = new Date().toLocaleString();
  const log = `${req.url} / ${req.method} New log received on: ${d}\n`;
  const myURL = url.parse(req.url, true);
 

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myURL.pathname) {
      case "/":
        if (req.method == "GET") {
          res.end("Home Page");
        }
        console.log(req.method);

        break;
      case "/about":
        const username = myURL.query.name;
        res.end(`Hello ${username}`);
        break;
      case "/search":
        const search = myURL.query.search_query;
        res.end(`Here are you search results ` + search);
      default:
        res.end("404 NOT FOUND");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server Started");
});
