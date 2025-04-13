const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("🟢 لاعب متصل");

  socket.on("disconnect", () => {
    console.log("🔴 لاعب خرج");
  });
});

http.listen(3000, () => {
  console.log("✅ السيرفر شغال على http://localhost:3000");
});
