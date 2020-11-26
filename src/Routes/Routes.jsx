
import RegisterComponent from '../Containers/Register/Register'
import LoginComponent from '../Containers/Login/Login'
import ContactsComponent from '../Containers/Contacts/Contacts'
import CreateContactComponent from '../Containers/CreateContact/CreateContact'


const routes = [
  {
    path: '/auth/register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: '/auth/login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: '/',
    component: ContactsComponent,
    title: 'Contacts'
  },
  {
    path: '/contacts/create',
    component: CreateContactComponent,
    title: 'Create Contact'
  },
]

export default routes