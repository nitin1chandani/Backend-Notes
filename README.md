Backend is consist of HTTP Server, Authentication, Databases, Middlewares

1. HTTP Server

HTTP Server is Consist of
(a) Request Methods
(b) URL port Route
(c) Query Parameters, Headers, Body
(d) Status Code
(f) Response HTML, JSON Text
(g) CORS

To contact with a server we need URL which is overall a IP address.

URL + Route = this is the most important thing when you are contacting with backend server.
https://url.com/routes

Example : https://chat.openai.com/backend-api/conversation

2. Query Params, Headers, Body are some ways to send the data to backend.

   Query params
   -> Example https://example.com/addition?counter=10000 ("?counter=10000" this is a parameter)
   -> So this is a way to send data to backend through URL

   -> In last example their was just singly query, but if we want send more queries
   then simply we can just use "&" .
   Example : https://example.com/addition?counter=10000&temp=1001&temp2=101 (here we have added 3 parameters)

   -> Now we know how to take input through query params but we have do some changes in backend
   to get this input.

   -> So get the query parameters in backend so that server can do some operatins on input
   we can write like "let counter = req.query.counter;"

IMP -> Every HTTP request have these things -> URL, Route, Method

Methods -> GET, POST, PUT, DELETE
