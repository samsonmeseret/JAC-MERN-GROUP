const http = require("http");

let app = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.write("This is Home Page");
    res.end();
  } else if (req.url == "/about") {
    res.write("This is About Page");
    res.end();
  } else {
    res.write("Not Found");
    res.end();
  }
});

app.listen(6060, (err) => {
  if (err) throw err;
  console.log("server started running on port 6060");
});
