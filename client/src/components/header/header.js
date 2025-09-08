
const { ref, onMounted, } = Vue;
const { useRouter, useRoute } = VueRouter;


const header = {
  setup() {
    const route = useRoute();
   

    onMounted(() => {
     
    });


    return {
    
    };
  },
  template:  `<div class="header">
    <div class="user-info">
        <img src="user-avatar.png" alt="User" class="avatar">
        <span class="username">Tasadduq Khurshid</span>
    </div>
    <button class="logout-btn">Logout</button>
</div>`,
};

export default header;
