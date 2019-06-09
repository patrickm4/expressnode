const fetch = require("node-fetch");

fetch("http://localhost:3000/names").then(res =>
  res.json().then(data => {
    console.log(data);
  })
);
