import http from 'http'
// import WebSocket from 'ws'
import SocketIo from 'socket.io'
import express from 'express';
import * as path from "node:path";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");

// http, webSocket 둘 다 작동시키기 위함 (http 서버 위에 ws 서버를 만듦)
// 2개의 protocol 은 같은 port 공유
const httpServer = http.createServer(app);
const wsServer = SocketIo(httpServer);

wsServer.on("connection", (socket) => {
    socket.onAny((event) => {
       console.log(`Socket Event: ${event}`);
    });
    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName);
        done();
    });
});

// const wss = new WebSocket.Server({ server }); // webSocket 만 만드려면 이것만
// const sockets = [];
//
// wss.on("connection", (socket)=> {
//     sockets.push(socket);
//     socket["nickname"] = "Anonymous";
//     console.log("Connected to Browser ✅");
//     socket.on("close", () =>  console.log("Disconnected to the browser ❌"));
//     socket.on("message", (msg) => {
//         const message = JSON.parse(msg);
//         switch (message.type) {
//             case "new_message":
//                 sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${message.payload.toString()}`));
//                 break;
//             case "nickname":
//                 socket["nickname"] = message.payload;
//                 break;
//         }
//     });
// });

httpServer.listen(3000, handleListen);

