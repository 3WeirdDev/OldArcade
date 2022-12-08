const express = require("express");
const http = require("http");
const fs = require("fs");
const socket_io = require("socket.io");

const app = express();
const server = http.createServer(app);
const io_server = socket_io(server);

const port = 8080;

app.get("*", (req, res) => {
    let newUrl = req.url;
    if (newUrl.startsWith("/")) newUrl = newUrl.slice(1);
    if (newUrl === "") newUrl = "Client/Arcade.html";

    const headers = { "Content-Type": "text/html" };
    fs.readFile(newUrl, function(error, data) {
        if (error) {
            res.writeHead(404, headers);
            res.write("<html><h1>error 404 page not found</h1></html>");
        } else {
            res.writeHead(200, headers);
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, (error, data) => {
    if (error)
        console.log(`Server failed to start because of : ${data}.`);
    else
        console.log(`Server started on port ${port}.`);
})

io_server.on("connection", (socket) => {
    console.log(`Socket Connected With a Id of : ${socket.id}.`);

    socket.on("disconnect", () => {
        console.log(`Socket Disconnected With a Id of ${socket.id}.`);
    });
});