import React from 'react'
import { Menu, Image, Input } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import img from '../../Assets/Img/contacts.png'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Logout from '../../Context/Actions/auth/Logout'
import { GlobalContext } from '../../Context/Provider'

import classes from './Header.module.css'
import searchContacts from '../../Context/Actions/Contacts/searchContacts'

const Header = () => {

  const { pathname } = useLocation()
  const token = localStorage.token
  const history = useHistory()
  const { contactDispatch: dispatch } = React.useContext(GlobalContext)

  // logout function
  const userLogoutHandler = () => {
    Logout(history)(dispatch)
  }

  // window screen width functions
  const WindowWidth = window.screen.width
  const controlFade = () => WindowWidth > 767 && 'fade'
  const btnText = (name) => WindowWidth > 767 && name

  // search for contacts here
  const onChange = (e, { value }) => {
    const searchText = value.trim().replace(/\s/g, '')
    searchContacts(searchText)(dispatch)
  }

  // header items
  const Logo = (
    <Menu.Item as={Link} to='/'>
      <Image src={img} width={60}
        className={classes.Logo} />
    </Menu.Item>
  )

  const Title = (
    <Menu.Item as={Link} to='/' className={classes.Title}>
      My Contacts
    </Menu.Item>
  )

  const createContactBTN = (
    <Menu.Item>
      <Button as={Link} to='/contacts/create'
        animated={controlFade()}
        basic color='green' >
        <Button.Content visible>{btnText("New Contact")}</Button.Content>
        <Button.Content hidden>
          <Icon name='add' />
        </Button.Content>
      </Button>
    </Menu.Item>
  )

  const registerBTN = (
    <Menu.Item>
      <Button as={Link} to='/auth/register' animated={controlFade()} basic color='orange'>
        <Button.Content visible>{btnText('Register')}</Button.Content>
        <Button.Content hidden>
          <Icon name='add user' />
        </Button.Content>
      </Button>
    </Menu.Item>
  )

  const loginBTN = (
    <Menu.Item>
      <Button as={Link} to='/auth/login' animated={controlFade()} basic color='green'>
        <Button.Content visible>{btnText('Login')}</Button.Content>
        <Button.Content hidden>
          <Icon name='sign in' />
        </Button.Content>
      </Button>
    </Menu.Item>
  )

  const logoutBTN = (
    < Menu.Item >
      <Button animated={controlFade()} onClick={userLogoutHandler} basic color='red'>
        <Button.Content visible>{btnText('Logout')}</Button.Content>
        <Button.Content hidden>
          <Icon name='log out' />
        </Button.Content>
      </Button>
    </Menu.Item >
  )

  const searchInput = (
    <Menu.Item>
      <Input placeholder='Search for contacts' onChange={onChange} />
    </Menu.Item>
  )


  return (
    <React.Fragment>
      <Menu pointing secondary>
        {Logo}
        {Title}
        <Menu.Menu position='right' style={{ alignSelf: 'center' }}>
          {(pathname !== '/auth/register' && pathname !== '/auth/login') &&
            <React.Fragment>
              {searchInput}
              {token && createContactBTN}
              {token ? logoutBTN : loginBTN}
            </React.Fragment>
          }

          {pathname === '/auth/register' && loginBTN}
          {pathname === '/auth/login' && registerBTN}
        </Menu.Menu>
      </Menu>
    </React.Fragment>
  )
}


export default Header


