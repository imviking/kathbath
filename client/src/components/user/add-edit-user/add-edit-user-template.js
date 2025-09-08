const addEditUserTemplate = `    
<div class="user-form-wrapper d-flex align-items-center justify-content-center">
  <div class="card shadow-lg user-form-card">
    <div class="card-body">
      <h3 class="text-center mb-4">
        {{ action === 'AddUser' ? 'Add User' : 'Edit User' }}
      </h3>
      
      <form @submit.prevent="addUser">
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" id="firstName" class="form-control" v-model="userData.fullName.firstName" required>
          </div>
          <div class="col-md-4 mb-3">
            <label for="middleName" class="form-label">Middle Name</label>
            <input type="text" id="middleName" class="form-control" v-model="userData.fullName.middleName">
          </div>
          <div class="col-md-4 mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" id="lastName" class="form-control" v-model="userData.fullName.lastName" required>
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Gender</label>
          <div class="d-flex gap-4 ms-2">
            <label class="form-check-label">
              <input type="radio" value="Male" v-model="userData.gender" class="form-check-input" required> Male
            </label>
            <label class="form-check-label">
              <input type="radio" value="Female" v-model="userData.gender" class="form-check-input"> Female
            </label>
          </div>
        </div>

        <div class="mb-3">
          <label for="userName" class="form-label">User Name / Email</label>
          <input type="email" id="userName" class="form-control" v-model="userData.email" required>
        </div>

        <div v-if="action === 'AddUser'" class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" class="form-control" v-model="userData.password" required>
        </div>

        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-outline-secondary px-4" @click="router.go(-1)">Cancel</button>
          <button type="submit" class="btn btn-primary px-4">
            {{ action === 'AddUser' ? 'Save User' : 'Update User' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
`
export default addEditUserTemplate;
