const ContactModel = require("../models/contact.js");

class ContactDao {
    async getContactsByUser(userId) {
        return ContactModel.find({ userId });
    }

    async createContact(contactData) {
        const contact = new ContactModel(contactData);
        return contact.save();
    }

    async getContactById(contactId) {
        return ContactModel.findById(contactId);
    }

    async updateContact(contactId, updates) {
        return ContactModel.findByIdAndUpdate(contactId, updates, { new: true });
    }

    async deleteContact(contactId) {
        return ContactModel.findByIdAndDelete(contactId);
    }
}

module.exports = new ContactDao();
