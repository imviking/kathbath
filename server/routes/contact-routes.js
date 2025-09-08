const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact.js");

// Get all contacts for a user
router.get("/", (req, res) => contactController.getContacts(req, res));

// Create a new contact
router.post("/save-contact", (req, res) => contactController.createContact(req, res));

// Update contact
router.put("/:id", (req, res) => contactController.updateContact(req, res));

// Delete contact
router.delete("/:id", (req, res) => contactController.deleteContact(req, res));

module.exports = router;
