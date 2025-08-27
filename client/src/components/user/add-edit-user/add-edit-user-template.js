const addEditUserTemplate = `    
<div class="container mt-4">
    <div class="row justify-content-center">
    
    
    <div class="col-md-6">
        <div class="mb-3">
            <p><h3>{{action === 'AddUser' ? 'Add User' :'Edit User'}}</h3> </p>
        </div>
        <form @submit.prevent="addUser">
        <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" v-model="userData.fullName.firstName">
        </div>
        <div class="mb-3">
            <label for="middleName" class="form-label">Middle Name</label>
            <input type="text" class="form-control" id="middleName" v-model="userData.fullName.middleName">
            </div>
        <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" v-model="userData.fullName.lastName">
        </div>

        <div class="mb-3">
            <label for="Gender" class="form-label">Gender</label>
            <div class="d-block">
                <div class="ms-5">
                    <input class="" type="radio" value ='Male' class="form-control-radio" id="userName" v-model="userData.gender"/><span class="m-2 mb-0">Male</span>
                </div>
                <div class="ms-5">
                    <input class="" type="radio" value='Female' class="form-control-radio" id="userName" v-model="userData.gender"/><span class="m-2 mb-0">Female</span>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <label for="userName" class="form-label">User Name/Email</label>
            <input type="text" class="form-control" id="userName" v-model="userData.email">
        </div>

        <div v-if="action === 'AddUser'" class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="userData.password">
        </div>
        <div class="d-flex row" >
            <div class ="col text-start" >
                <button type="button" class="btn btn-secondary" @click = "router.go(-1)">Cancel</button>
            </div>
            <div class="col text-end">
                <button type="submit" class="btn btn-primary ">{{action == 'AddUser' ? 'Save User' :'Update User'}}</button>
            </div>
        </div>
        
        </form>
    </div>
    </div>
</div>`
export default addEditUserTemplate