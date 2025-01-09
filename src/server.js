import http from 'http'
import WebSocket from 'ws'
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
const server = http.createServer(app);
const wss = new WebSocket.Server({ server }); // webSocket 만 만드려면 이것만

function handleConnection(socket) {
    console.log(socket);
}
wss.on("connection", handleConnection);

server.listen(3000, handleListen);