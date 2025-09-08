const webRtcService = require("./webRtcService.js");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("⚡ New client connected:", socket.id);

    // Chat messages
    socket.on("chat-message", (data) => {
      console.log("📩 Message received:", data);
      io.emit("chat-message", data);
    });

    // Join WebRTC room
    socket.on("join-room", ({ roomId, userId }) => {
      try {
        const result = webRtcService.joinRoom(roomId, userId);
        socket.join(roomId);
        console.log(result.message);
        socket.to(roomId).emit("user-joined", { userId });
      } catch (err) {
        console.error("❌ join-room error:", err.message);
      }
    });

    // Offer
    socket.on("offer", ({ roomId, offer, userId }) => {
      try {
        const result = webRtcService.handleOffer(roomId, offer, userId);
        console.log(result.message);
        socket.to(roomId).emit("offer", { userId, offer });
      } catch (err) {
        console.error("❌ offer error:", err.message);
      }
    });

    // Answer
    socket.on("answer", ({ roomId, answer, userId }) => {
      try {
        const result = webRtcService.handleAnswer(roomId, answer, userId);
        console.log(result.message);
        socket.to(roomId).emit("answer", { userId, answer });
      } catch (err) {
        console.error("❌ answer error:", err.message);
      }
    });

    // ICE Candidate
    socket.on("ice-candidate", ({ roomId, candidate, userId }) => {
      try {
        const result = webRtcService.handleIceCandidate(roomId, candidate, userId);
        console.log(result.message);
        socket.to(roomId).emit("ice-candidate", { userId, candidate });
      } catch (err) {
        console.error("❌ ice-candidate error:", err.message);
      }
    });

    // User leaving rooms
    socket.on("disconnecting", () => {
      const rooms = [...socket.rooms].filter((r) => r !== socket.id);
      rooms.forEach((roomId) => {
        socket.to(roomId).emit("user-left", { userId: socket.id });
      });
    });

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });
};
