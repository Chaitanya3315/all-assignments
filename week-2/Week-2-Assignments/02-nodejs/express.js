const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (res, req) {
  res.send("First HTTP Server");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});