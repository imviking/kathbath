// src/components/kathbath/kathbath.js
import kathbathPageTemplate from "./kathbath-page-template.js";
import chat from "../chat/chat-page.js";
import contact from "../contacts/contact-page.js";
import sidebar from "../sidebar/sidebar-page.js";
import header from "../header/header.js";
import { socketService } from "../../services/socketService.js";

const { ref, onMounted, onUnmounted } = Vue;

const kathbathPage = {
  components: {
    "header-component": header,
    "sidebar-component": sidebar, 
    "chat-component": chat,
    "contact-component": contact,},
  setup() {
    const recentChats = ref([]);
    const selectedChat = ref(null);

    const openChat = (chatData) => {
      selectedChat.value = chatData;
    };

    onMounted(async () => {
      try {
        await socketService.connect();

        // Listen for recent chats
        socketService.on("recent-chats", (chats) => {
          console.log("📥 Recent chats received:", chats);
          recentChats.value = chats;
        });

        // Listen for new incoming messages
        socketService.on("message", (msg) => {
          console.log("💬 Incoming message:", msg);
          // Update recent chats UI dynamically
          recentChats.value = [
            msg,
            ...recentChats.value.filter((c) => c.id !== msg.id),
          ];
        });

      } catch (err) {
        console.error("❌ Socket init failed:", err);
      }
    });

    onUnmounted(() => {
      socketService.disconnect();
    });

    return {
      recentChats,
      selectedChat,
      openChat,
    };
  },
  template: kathbathPageTemplate,
};

export default kathbathPage;
