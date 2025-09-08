const { reactive } = Vue
export const contactsStore = reactive({
  contacts: [],
    setContacts(contacts) { 
    contacts = contacts
    },
    clearContacts() {
        contacts = []
    }
})
