import chatPageTemplate from "./chat-page-template.js";
import { chatsStore } from "../../stores/chatsStore.js";
import { contactsStore } from "../../stores/contactsStore.js";
import chatHeader from "./chat-header.js";
const { ref, onMounted, } = Vue;
const { useRouter, useRoute } = VueRouter;


const chatPage = {
  components: {"chat-header": chatHeader},
  setup() {
    const route = useRoute();
    const contactId = parseInt(route.params.id);

    const newMessage = ref("");
    const messages = ref([]);

    const contactName = contactsStore.getContact(contactId)?.name || "Unknown";

    onMounted(() => {
      const chat = chatsStore.getChat(contactId);
      messages.value = chat ? chat.messages : [];
    });

    const sendMessage = () => {
      if (!newMessage.value) return;
      chatsStore.addChat(contactId, newMessage.value, "me");
      messages.value.push({
        sender: "me",
        message: newMessage.value,
        timestamp: new Date(),
      });
      newMessage.value = "";
    };

    return {
      contactName,
      messages,
      newMessage,
      sendMessage,
    };
  },
  template: chatPageTemplate,
};

export default chatPage;
