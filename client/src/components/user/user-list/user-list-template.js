const userListTemplate =`
<div v-if = 'isFetched'>
    <div class="d-flex">
      <i class="fa fa-user mb-0" style="font-size: xxx-large;"></i>
      <h3 class="mb-0">User List</h3>
    </div>

    <div v-if="userList.length > 0">
      <table  class="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userList" :key="index">
            <td>{{ user.fullName.firstName }} {{ user.fullName.middleName }} {{ user.fullName.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.gender }}</td>
            <td>
              <i class="fa fa-edit" 
                @click="router.push({ name: 'add-edit-user', params: { id: user._id } })"
                title="Edit"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="mt-4 justify-content-center">Oops! No User Added Yet</div>
</div>`
export default userListTemplate