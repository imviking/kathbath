import addEditUser from "./add-edit-user/add-edit-user.js";
import userList from "./user-list/user-list.js";

const {ref,onMounted}=Vue;
const { useRouter, useRoute } = VueRouter;

const homePage ={
    components:{
        userList,
        'add-user':addEditUser,

    },
    setup(){
     const router = useRouter()
     let popUp = ref({})
     const showPopUp = async(name)=>{
        popUp.value.name = name
     }
        onMounted(async()=>{
        })

        return {
            popUp,
            router,
        }
    },
    template:`
    <div>

    <div class="d-flex row" >
        <div class ="col m-4 text-start" >
             <p><h1>Users</h1></p>
        </div>
        <div class="col m-4 text-end">
            <button @click="router.push({ name: 'add-edit-user',query: {action:'AddUser' } })"
            class="btn btn-primary mb-3">Add User</button>
        </div>
    </div>

        <div class="m-4">
            <userList/>
        </div>
    </div>
    
    `
}
export default homePage