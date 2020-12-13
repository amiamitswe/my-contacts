import { lazy } from 'react'
import RegisterComponent from '../Containers/Register/Register'
import LoginComponent from '../Containers/Login/Login'
import ContactsComponent from '../Containers/Contacts/Contacts'

const CreateContactComponent = lazy(() => import('../Containers/CreateContact/CreateContact'))

const routes = [
  {
    path: '/auth/register',
    component: RegisterComponent,
    title: 'Register',
    needsAuth: false
  },
  {
    path: '/auth/login',
    component: LoginComponent,
    title: 'Login',
    needsAuth: false
  },
  {
    path: '/contacts/create',
    component: CreateContactComponent,
    title: 'Create Contact',
    needsAuth: true
  },
  {
    path: '/',
    component: ContactsComponent,
    title: 'Contacts',
    needsAuth: true
  },

]

export default routes