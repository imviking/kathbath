const contactDao = require("../dao/contact");

class ContactService {
  async listContacts(userId) {
    return contactDao.getContactsByUser(userId);
  }

  async addContact(userId, fullName, phone, organization) {
    return contactDao.createContact({
      userId,
      fullName,
      phone,
      organization
    });
  }

  async editContact(contactId, updates) {
    return contactDao.updateContact(contactId, updates);
  }

  async removeContact(contactId) {
    return contactDao.deleteContact(contactId);
  }
}

module.exports = new ContactService();
