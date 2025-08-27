import api from "../../../services/api.js";
import addEditUserTemplate from "./add-edit-user-template.js"
const {ref,onMounted,toRef}=Vue;
const {useRoute,useRouter}=VueRouter
const addEditUser ={
    props: ['id'],
    components:{

    },
    setup(props){
     let route = useRoute()
     let router = useRouter()
     let userData = ref({
        fullName:{} 
     })
     let action = route.query.action

     const getUserDetails = async()=>{
        try {
            let response = await api.get('/user/user-details',{params:{id:route.params.id}})
            if(response.status == 201){
                userData.value = response.data.userData
            } 
        } catch (error) {
            
        }
     }
     const addUser = async()=>{
        try {
            let response = await api.post('/user/save-user',{userData:userData.value})
            if(response.status == 201){
                router.go(-1)
                alert(response.data.message)
            } 
        } catch (error) {
            console.log(error)
        }
        
     }
        onMounted(async()=>{
            console.log('props.id',action, props.id);
            if(props.id){
                await getUserDetails()
            }
        })

        return {
            userData,
            action,
            addUser,
        }
    },
    template:addEditUserTemplate
}
export default addEditUser