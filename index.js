const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;
app.use(bodyParser.json());
// const middleware1 = (req, res, next) => {
//   console.log("From the middleware", req.headers);
//   next();
// };

// app.use(middleware1);

function addition(counter) {
  var sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Say hello to my backend");
});

app.get("/route", (req, res) => {
  let counter = req.query.counter;
  if (counter !== undefined && counter < 10000) {
    let temp = addition(counter);
    var ans = "the sum is " + temp;
    res.send(ans);
  } else {
    res.status(411).send("you have sent very large number");
  }
});

app.get("/sum", (req, res) => {
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is working perfectly on ${port}`);
});
