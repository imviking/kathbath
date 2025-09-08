const express = require("express");
const router = express.Router();
const kathbathController = require("../controller/kathbath");

router.get("/health", kathbathController.healthCheck);
router.post("/join", kathbathController.joinRoom);
router.post("/offer", kathbathController.sendOffer);
router.post("/answer", kathbathController.sendAnswer);
router.post("/ice-candidate", kathbathController.sendIceCandidate);

module.exports = router;
