const { reactive } = Vue;

export const userStore = reactive({
  user: null,

  setUser(u) {
    this.user = u;
    sessionStorage.setItem("user", JSON.stringify(u));   // ✅ save in sessionStorage
  },

  loadUser() {
    const saved = sessionStorage.getItem("user");
    if (saved) {
      this.user = JSON.parse(saved);
    }
  },

  clearUser() {
    this.user = null;
    sessionStorage.removeItem("user");  // ✅ remove from sessionStorage
  }
});
