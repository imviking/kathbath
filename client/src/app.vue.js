const {onMounted} = Vue
export default {
    name:"App",
    components:{

    },
    setup(){
       onMounted(()=>{
        console.log('mounting home page')
       }) 
    },
    template:`
    <div>
         <router-view :key="$route.path" ></router-view>
    </div>`
}
