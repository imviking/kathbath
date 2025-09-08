import contactPageTemplate from "./contact-page-template.js";
import api from "../../services/api.js";
import { userStore } from "../../stores/userStore.js";

const { ref, onMounted } = Vue;

const contactPage = {
  setup() {
    const contacts = ref([]);
    const newContact = ref({ fullName:{
        firstName: "", lastName: "", middleName: ""
    }, phone: "", organization: "" });
    const loading = ref(false);
    const error = ref(null);

    const user = JSON.parse(JSON.stringify(sessionStorage.getItem("user")));

    // Fetch contacts
    const fetchContacts = async () => {
      try {
        loading.value = true;
        error.value = null;
        const res = await api.get(`/contacts`);
        contacts.value = res.data || [];
      } catch (err) {
        error.value = "Failed to load contacts.";
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    const resetConactForm = () => {
      newContact.value = { fullName:{
        firstName: "", lastName: "", middleName: ""
    }, phone: "", organization: "" };
    }

    // Add new contact
    const addContact = async () => {
      console.log("Adding Contact ",newContact.value,user.id , sessionStorage.getItem("user"));
      if (!newContact.value.fullName || !newContact.value.phone) return;
      try {
        const res = await api.post("/contacts/save-contact", {
          ...newContact.value,
          userId: JSON.parse(user).id,
        });
      
        if(res.status === 201){
            console.log("Contact added:", res.data);
            fetchContacts();
            resetConactForm();
        }else{
            alert('Failed to add contact');
        }
       
      } catch (err) {

        console.error("Failed to add contact:", err);
      }
    };

    // Delete contact
    const deleteContact = async (id) => {
      try {
        await api.delete(`/contacts/${id}`);
        contacts.value = contacts.value.filter((c) => c._id !== id);
      } catch (err) {
        console.error("Failed to delete contact:", err);
      }
    };

    onMounted(() => {
      fetchContacts();
    });

    return {
      contacts,
      newContact,
      loading,
      error,
      addContact,
      deleteContact,
    };
  },
  template: contactPageTemplate,
};

export default contactPage;
