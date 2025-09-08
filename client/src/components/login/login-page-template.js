const loginPageTemplate = `
<div class="login-wrapper">
  <div class="login-card">
    <h3 class="text-center mb-4">Login</h3>
    <form @submit.prevent="loginUser">
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" required />
      </div>
      <button class="btn btn-primary w-100">Login</button>
      <p class="text-center mt-3">
        Don’t have an account? <a href="#/signup">Sign Up</a>
      </p>
    </form>
  </div>
</div>
`;

export default loginPageTemplate;
