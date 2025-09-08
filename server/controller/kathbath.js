const webRtcService = require("../services/webRtcService");

const healthCheck = (req, res) => {
  return res.json({ status: "✅ Kathbath WebRTC API running" });
};

const joinRoom = async (req, res) => {
  try {
    const { roomId, userId } = req.body;
    const result = await webRtcService.joinRoom(roomId, userId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const sendOffer = async (req, res) => {
  try {
    const { roomId, offer, userId } = req.body;
    const result = await webRtcService.handleOffer(roomId, offer, userId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const sendAnswer = async (req, res) => {
  try {
    const { roomId, answer, userId } = req.body;
    const result = await webRtcService.handleAnswer(roomId, answer, userId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const sendIceCandidate = async (req, res) => {
  try {
    const { roomId, candidate, userId } = req.body;
    const result = await webRtcService.handleIceCandidate(roomId, candidate, userId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  healthCheck,
  joinRoom,
  sendOffer,
  sendAnswer,
  sendIceCandidate,
};
