const addEditContactTemplate = `
<div class="container mt-4">
  <h2>{{ isEditMode ? 'Edit Contact' : 'Add Contact' }}</h2>
  <div class="col-md-8">
      <div class="card shadow-sm">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">Add New Contact</h5>
        </div>
        <div class="card-body">
          <form @submit.prevent="addContact">
            <div class="row mb-3">
              <div class="col">
                <input v-model="newContact.fullName.firstName" 
                       class="form-control" 
                       placeholder="First Name" required>
              </div>
              <div class="col">
                <input v-model="newContact.fullName.middleName" 
                       class="form-control" 
                       placeholder="Middle Name">
              </div>
              <div class="col">
                <input v-model="newContact.fullName.lastName" 
                       class="form-control" 
                       placeholder="Last Name" required>
              </div>
            </div>

            <div class="mb-3">
              <input v-model="newContact.phone" 
                     type="tel" 
                     class="form-control" 
                     placeholder="Phone Number" required>
            </div>

            <div class="mb-3">
              <input v-model="newContact.organization" 
                     class="form-control" 
                     placeholder="Organization">
            </div>

            <div class="text-end">
              <button type = "submit" class = "btn btn-success px-4" >Add Contact</button>
            </div>
          </form>
        </div>
      </div>
    </div>` ;

export default addEditContactTemplate;
