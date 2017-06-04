const express = require("express");

const app = express();

const server = () => {
  app.get("/index.html", (req, res) => {
    res.send("<h1>Hello Express!</>");
  });


  const PORT = 3000;
  app.listen(PORT);
};


module.exports = {
  server
};
