import sidebarTemplate from "./sidebar-template.js";
const { ref, onMounted, } = Vue;
const { useRouter, useRoute } = VueRouter;


const chatPage = {
  setup() {
    const route = useRoute();
   

    onMounted(() => {
     
    });


    return {
    
    };
  },
  template: sidebarTemplate,
};

export default chatPage;
