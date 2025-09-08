const chatPageTemplate = `

<div class="col-md-8 d-flex flex-column chat-container container-fluid mt-3">
  <div class="row mb-3">
     <div class="chat-header">
      <chat-header></chat-header>
    </div>
    <div class="col text-start">
      <h3>Chat</h3>         
    </div>
    <div class="col text-end">
      <button class="btn btn-secondary" @click="$router.push({ name: 'contacts' })">  
        <i class="bi bi-people-fill"></i> Contacts
      </button>
    </div>
  </div>
  <div class="row">
   
    <!-- Chat Window -->
    <div class="col-md-8 d-flex flex-column" v-if="selectedChat">
      <div class="card flex-fill shadow-sm">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h6 class="mb-0">{{ selectedChat.name }}</h6>
          <div>
            <button class="btn btn-sm btn-outline-success me-2" @click="startVoiceCall">
              <i class="bi bi-telephone"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger" @click="startVideoCall">
              <i class="bi bi-camera-video"></i>
            </button>
          </div>
        </div>

        <div class="card-body chat-window overflow-auto" style="height: 60vh;">
          <div v-for="msg in selectedChat.messages" :key="msg.id" class="mb-2">
            <div :class="['p-2 rounded', msg.from === userId ? 'bg-primary text-white ms-auto' : 'bg-light text-dark me-auto']" style="max-width: 70%;">
              {{ msg.text }}
              <br>
              <small class="text-muted">{{ msg.time }}</small>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <form @submit.prevent="sendMessage" class="d-flex">
            <input v-model="newMessage" class="form-control me-2" placeholder="Type a message">
            <button class="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>

    <div v-else class="col-md-8 d-flex justify-content-center align-items-center text-muted">
      <p>Select a chat to start messaging</p>
    </div>
  </div>
</div>
`;
export default chatPageTemplate;
