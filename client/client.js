// client/client.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.CLIENT_PORT || 3000;

// Serve static files directly from client folder
app.use(express.static(path.join(__dirname)));

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌐 Client running at http://localhost:${PORT}`);
});
