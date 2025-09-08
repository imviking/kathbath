const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  fullName: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true }
  },

  phone: { type: String, required: true },
  organization: { type: String }
});
const ContactModel = mongoose.model('Contact', ContactSchema);
module.exports = ContactModel;
