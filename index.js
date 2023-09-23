const express = require("express");

const app = express();

const port = 3000;
function addition(counter) {
  var sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/route", (req, res) => {
  let temp = addition(100);
  var ans = "the sum is " + temp;
  res.send(ans);
});

app.get("/sum", (req, res) => {
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is working perfectly on ${port}`);
});
