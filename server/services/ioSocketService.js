const webRtcService = require("./webRtcService.js");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("⚡ New client connected:", socket.id);

    // ---------------- Global Chat ----------------
    socket.on("chat-message-global", (data) => {
      console.log("🌍 Global message:", data);
      io.emit("chat-message-global", data);
    });

    // ---------------- Room Chat ----------------
    socket.on("chat-message", ({ roomId, userId, message }) => {
      console.log(`💬 ${userId} in ${roomId}: ${message}`);

      // Store in memory
      webRtcService.storeMessage(roomId, userId, message);

      // Broadcast to all participants in the room
      io.to(roomId).emit("chat-message", { userId, message });
    });

    // ---------------- Join Room ----------------
    socket.on("join-room", ({ roomId, userId }) => {
      const result = webRtcService.joinRoom(roomId, userId);
      socket.join(roomId);
      console.log(result.message);

      // Notify others in room
      socket.to(roomId).emit("user-joined", { userId });

      // Send existing chat history
      if (result.roomId) {
        const room = webRtcService.getRoom(roomId);
        if (room && room.messages) {
          socket.emit("chat-history", room.messages);
        }
      }
    });

    // ---------------- WebRTC Offer ----------------
    socket.on("offer", ({ roomId, offer, userId }) => {
      const result = webRtcService.handleOffer(roomId, offer, userId);
      console.log(result.message);
      socket.to(roomId).emit("offer", { userId, offer });
    });

    // ---------------- WebRTC Answer ----------------
    socket.on("answer", ({ roomId, answer, userId }) => {
      const result = webRtcService.handleAnswer(roomId, answer, userId);
      console.log(result.message);
      socket.to(roomId).emit("answer", { userId, answer });
    });

    // ---------------- ICE Candidate ----------------
    socket.on("ice-candidate", ({ roomId, candidate, userId }) => {
      const result = webRtcService.handleIceCandidate(roomId, candidate, userId);
      console.log(result.message);
      socket.to(roomId).emit("ice-candidate", { userId, candidate });
    });

    // ---------------- Disconnect ----------------
    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });
};
