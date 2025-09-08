// In-memory store for rooms & signaling data
const rooms = {};

// User joins a room
const joinRoom = (roomId, userId) => {
  if (!rooms[roomId]) {
    rooms[roomId] = { participants: {}, messages: [] };
  }

  rooms[roomId].participants[userId] = {
    offer: null,
    answer: null,
    candidates: []
  };

  return { message: `User ${userId} joined room ${roomId}`, roomId };
};

// Handle SDP offer
const handleOffer = (roomId, offer, userId) => {
  if (!rooms[roomId] || !rooms[roomId].participants[userId]) {
    throw new Error("Room or user not found");
  }
  rooms[roomId].participants[userId].offer = offer;
  return { message: "Offer stored successfully" };
};

// Handle SDP answer
const handleAnswer = (roomId, answer, userId) => {
  if (!rooms[roomId] || !rooms[roomId].participants[userId]) {
    throw new Error("Room or user not found");
  }
  rooms[roomId].participants[userId].answer = answer;
  return { message: "Answer stored successfully" };
};

// Handle ICE candidate
const handleIceCandidate = (roomId, candidate, userId) => {
  if (!rooms[roomId] || !rooms[roomId].participants[userId]) {
    throw new Error("Room or user not found");
  }
  rooms[roomId].participants[userId].candidates.push(candidate);
  return { message: "Candidate stored successfully" };
};

// Store chat message
const storeMessage = (roomId, userId, message) => {
  if (!rooms[roomId]) return;
  rooms[roomId].messages.push({ userId, message, timestamp: Date.now() });
};

module.exports = {
  joinRoom,
  handleOffer,
  handleAnswer,
  handleIceCandidate,
  storeMessage
};
