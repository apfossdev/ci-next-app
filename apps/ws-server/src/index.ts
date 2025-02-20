import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
  port: 3001
});

server.on("connection", (socket) => {
  // we are writing the below logic to dump random data to the db to check whether the db connection is working fine, ideally not required
  client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString()
    }
  })
  socket.send("Hi there you are connected to the server");
})