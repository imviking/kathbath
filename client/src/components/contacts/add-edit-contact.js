import addEditContactTemplate from "./add-edit-contact-template";
const { ref, onMounted, } = Vue;
const { useRouter, useRoute } = VueRouter;


const addEditContact = {
  setup() {
    const route = useRoute();
   

    onMounted(() => {
     
    });


    return {
    
    };
  },
  template: addEditContactTemplate,
};

export default addEditContact;
