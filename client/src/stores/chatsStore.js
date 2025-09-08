const { reactive } = Vue

export const chatsStore = reactive({
  recentChats: [],

  addChat(contactId, message, sender = "me") {
    let chat = this.recentChats.find(c => c.contactId === contactId);
    if (!chat) {
      chat = { contactId, messages: [] };
      this.recentChats.push(chat);
    }
    chat.messages.push({
      sender,
      message,
      timestamp: new Date(),
    });
  },

  getChat(contactId) {
    return this.recentChats.find(c => c.contactId === contactId);
  }
});
