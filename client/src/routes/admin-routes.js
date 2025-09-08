

const userRoutes = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('../components/home-page.js')
  },
  {
    path: '/users',
    name: 'user-list',
    component: () => import('../components/user/index.js')
  },{
    path:'/user/add-edit/:id?',name:'add-edit-user',
    component:()=>import("../components/user/add-edit-user/add-edit-user.js"),
    props:true,
  },
  {
    path: '/kathbath',
    name: 'kathbath-page',
    component: () => import('../components/kathbath/kathbath-page.js')
  },

];
export default userRoutes