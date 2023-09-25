const express = require("express");

const app = express();

const port = 3000;

const middleware1 = (req, res, next) => {
  console.log("From the middleware", req.headers);
  next();
};

app.use(middleware1);

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
  let counter = req.query.counter;
  let temp = addition(counter);
  var ans = "the sum is " + temp;
  res.send(ans);
});

app.get("/sum", (req, res) => {
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is working perfectly on ${port}`);
});
