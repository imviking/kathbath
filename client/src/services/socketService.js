// src/services/socketService.js
import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

let socket = null;

export const socketService = {
  async connect() {
    if (socket && socket.connected) return socket;

    return new Promise((resolve, reject) => {
      try {
        socket = io("http://localhost:5200", {
          transports: ["websocket"],
        });

        socket.on("connect", () => {
          console.log("✅ Socket connected:", socket.id);
          resolve(socket);
        });

        socket.on("connect_error", (err) => {
          console.error("❌ Socket connection failed:", err);
          reject(err);
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  on(event, callback) {
    if (!socket) return;
    socket.on(event, callback);
  },

  emit(event, payload) {
    if (!socket) return;
    socket.emit(event, payload);
  },

  disconnect() {
    if (socket) {
      socket.disconnect();
      console.log("🔌 Socket disconnected");
    }
  },

  getSocket() {
    return socket;
  },
};
