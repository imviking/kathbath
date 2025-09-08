import api from "../../../services/api.js";
import userListTemplate from "./user-list-template.js"
const {ref,onMounted}=Vue;
const { useRouter, useRoute } = VueRouter;
const userList ={
    components:{

    },
    setup(){
     let userList =ref({});
     let router = useRouter()
     let isFetched = ref(false)
     const getUserList = async()=>{
        console.log('hitting api')
        let response = await api.get('/user/user-list')
        if(response.status == 200){
            userList.value = response.data.userList
            isFetched.value = true
        }else{
            alert('some thing went wrong')
        }
     }

        onMounted(async()=>{
            await getUserList()
        })

        return {
            router,
            isFetched,
            userList,
        }
    },
    template:userListTemplate
}
export default userList