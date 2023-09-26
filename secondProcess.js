const logResponseBody = (jsonBody) => console.log(jsonBody);
const callBackFn = (result) => result.json().then(logResponseBody);
var sendObj = {
  method: "GET",
};
fetch("http://localhost:3000/route?counter=100", sendObj).then(callBackFn);
