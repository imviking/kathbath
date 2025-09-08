import loginPageTemplate from "./login-page-template.js";
import api from "../../services/api.js"; // your Axios instance
import { userStore } from "../../stores/userStore.js";

const { ref } = Vue;
const { useRouter } = VueRouter;

const loginPage = {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const loginUser = async () => {
      try {
        const response = await api.post("/auth/login", { email: email.value, password: password.value });
        alert(`Welcome ${response.data.fullName.firstName}`);
        const user = response.data;
        userStore.setUser(user)  // store the logged-in user
        // Save userId to localStorage or store for later
        localStorage.setItem("userId", response.data.userId);
        router.push({ 
            name: 'kathbath-page', 
        });// redirect after login
      } catch (err) {
        alert(err.response?.data?.error || "Login failed");
      }
    };

    return { email, password, loginUser };
  },
  template: loginPageTemplate,
};

export default loginPage;
