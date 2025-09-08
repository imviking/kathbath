const kathbathPageTemplate = `
<div class="kathbath-page container-fluid vh-100 d-flex flex-column p-0">

  <!-- Header -->
  <header-component class="w-100 border-bottom"></header-component>
  
  <!-- Main Body -->
  <div class="row flex-fill m-0 p-0">
    
    <!-- Sidebar -->
    <div class="col-md-3 col-lg-2 d-none d-md-block border-end p-0">
      <sidebar-component class="h-100"></sidebar-component>
    </div>
    
    <!-- Contacts -->
    <div class="col-md-3 col-lg-3 d-none d-md-block border-end p-0">
      <contact-component class="h-100"></contact-component>
    </div>
    
    <!-- Chat Window -->
    <div class="col-12 col-md-6 col-lg-7 d-flex flex-column p-0">
      <chat-component  :chatData="selectedChat" class="flex-fill p-0"></chat-component>
      <!-- <div v-else class="d-flex flex-fill justify-content-center align-items-center text-muted">
        <p>Select a chat to start</p>
      </div> -->
    </div>
    
  </div>
  
</div>
`;

export default kathbathPageTemplate;
