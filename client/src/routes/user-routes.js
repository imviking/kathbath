

const userRoutes = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('../components/user/index.js')
  },{
    path:'/add-edit/:id?',name:'add-edit-user',
    component:()=>import("../components/user/add-edit-user/add-edit-user.js"),
    props:true,
  }

];
export default userRoutes