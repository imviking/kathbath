const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const { PORT } = require("./config/config"); // API port, e.g., 5000
const connectDB = require("./services/mongo/mongoConnection");
const sessionMiddleware = require("./services/session/sessionService");
const webSocketService = require("./services/webSocketService");

const routes = require("./routes");

const app = express();

// API CORS (frontend dev server)
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(bodyParser.json());
app.use(sessionMiddleware);

// API routes
app.use("/api", routes);

// Start API server
const apiServer = http.createServer(app);
connectDB().then(() => {
  apiServer.listen(PORT, () => {
    console.log(`🚀 API server running at http://localhost:${PORT}`);
  });
});

// --- Socket.IO server on different port ---
const ioApp = express();
const ioServer = http.createServer(ioApp);
const io = new Server(ioServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

webSocketService(io);

const SOCKET_PORT = 8080;
ioServer.listen(SOCKET_PORT, () => {
  console.log(`⚡ Socket.IO server running at http://localhost:${SOCKET_PORT}`);
});
