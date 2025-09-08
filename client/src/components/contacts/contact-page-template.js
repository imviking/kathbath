const contactPageTemplate = `
<div class="container mt-4">
  <div class="row">
  
    <div class="col">
      <div v-if = "contacts.length" class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">Contacts</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="contact in contacts"
              :key="contact._id"
              @click="selectContact(contact)"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div>
              <img src="/public/user-icon.png" alt="User Icon" class="rounded-circle me-2" width="40" height="40">
              <strong>{{ contact.fullName.firstName }} {{ contact.fullName.LastName }}</strong><br>
              <small class="text-muted">{{ contact.organization }}</small>
            </div>
            <span class="badge bg-secondary">{{ contact.phone }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`;

export default contactPageTemplate;
