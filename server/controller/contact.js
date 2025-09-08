const contactService = require("../services/contactService");

const getContacts = async (req, res) => {
  try {
    const user = req.session.user;
    console.log("get contacts for user:", user);
    const userId = req.params.userId || req.query.userId || (user && user.id);

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const contacts = await contactService.listContacts(userId);
    res.json(contacts);
  } catch (err) {
    console.error("❌ Error fetching contacts:", err);
    res.status(500).json({ error: err.message });
  }
};

const createContact = async (req, res) => {
  try {
    const { userId, fullName, phone, organization } = req.body;
    console.log("Creating contact for userId:", userId, req.body);
    if (!userId || !fullName || !phone) {
      return res
        .status(400)
        .json({ error: "userId, fullName, and phone are required" });
    }
    const contact = await contactService.addContact(
      userId,
      fullName,
      phone,
      organization
    );
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const updated = await contactService.editContact(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    await contactService.removeContact(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact
};
