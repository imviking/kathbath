
const { ref, onMounted, } = Vue;
const { useRouter, useRoute } = VueRouter;


const chatHeader = {
  setup() {
 
   

    onMounted(() => {
     
    });


    return {
    
    };
  },
  template: `<div class="chat-header">
    <span class="contact-name">Florencio Dorrance</span>
    <div class="call-buttons">
        <button class="audio-call">📞</button>
        <button class="video-call">🎥</button>
    </div>
</div>`,
};

export default chatHeader;
