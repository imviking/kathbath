

const userRoutes = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('../components/home-page.js')
  },
  {
    path: '/login',
    name: 'login-page',
    component: () => import('../components/login/login-page.js')
  },{
    path:'/signup/:id?',name:'add-edit-user',
    component:()=>import("../components/user/add-edit-user/add-edit-user.js"),
    props:true,
  },

  {
    path:'/contact/:id?',name:'edit-contact',
    component:()=>import("../components/contacts/contact-page.js"),
    props:true,
  },
  {
    path:'/contacts',name:'contacts',
    component:()=>import("../components/contacts/contact-page.js"),
    props:true,
  },
  {
    path: '/kathbath',
    name: 'kathbath-page',
    component: () => import('../components/kathbath/kathbath-page.js'),
  },

];
export default userRoutes