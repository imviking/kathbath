const homePageTemplate = `
<div class="container-fluid vh-100 d-flex align-items-center justify-content-center auth-page">
  <div class="row w-100 shadow-lg rounded overflow-hidden">
    
    <!-- Left Branding Section -->
    <div class="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white auth-left">
      <div class="overlay text-center p-4">
        <img src="/public/logo.png" alt="KathBath Logo" class="mb-4 img-fluid auth-logo" />
        <h2 class="fw-bold">KathBath Messenger</h2>
        <p class="lead">Chat, Call & Connect seamlessly with your contacts.</p>
      </div>
    </div>

    <!-- Right Form Section -->
    <div class="col-md-6 bg-white p-5 auth-right">
      <ul class="nav nav-tabs mb-4" id="authTabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab">
            Login
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab">
            Signup
          </button>
        </li>
      </ul>

      <div class="tab-content" id="authTabsContent">
        <!-- Login Component -->
        <div class="tab-pane fade show active" id="login" role="tabpanel">
          <login></login>
        </div>

        <!-- Signup Component -->
        <div class="tab-pane fade" id="signup" role="tabpanel">
          <signup action="AddUser"></signup>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export default homePageTemplate;
