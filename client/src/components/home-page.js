import api from "../services/api.js";
import homePageTemplate from "./home-page-template.js"
const {ref,onMounted}=Vue;
const { useRouter, useRoute } = VueRouter;
const homePage ={
    components:{

    },
    setup(){
     const route = useRoute()
     const router = useRouter()
     let userList =ref({});
     let userData = ref({
        fullName:{}
     })
     let popUp = ref({})
     const getUserList = async()=>{
        console.log('hitting api')
        let response = await api.get('/user/user-list')
        if(response.status == 200){
            userList.value = response.data.userList
        }else{
            alert('some thing went wrong')
        }
     }

     const showPopUp = async(name)=>{
        console.log('running this',popUp.value.name)
        popUp.value.name = name
     }
     const addUser = async()=>{
        try {
            let response = await api.post('/user/save-user',{userData:userData.value})
            if(response.status == 201){
                alert('data inserted')
            } 
        } catch (error) {
            console.log(error)
        }
        
     }
        onMounted(async()=>{
            await getUserList()
        })

        return {
            userList,
            popUp,
            userData,
            getUserList,
            addUser,
            showPopUp
        }
    },
    template:homePageTemplate
}
export default homePage