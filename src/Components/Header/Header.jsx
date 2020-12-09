
import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import img from '../../Assets/Img/contacts.png'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Logout from '../../Context/Actions/auth/Logout'
import { GlobalContext } from '../../Context/Provider'

const Header = () => {

  const { pathname } = useLocation()

  // console.log('location', pathname)

  const token = localStorage.token
  const history = useHistory()
  const { contactDispatch: dispatch } = React.useContext(GlobalContext)


  const userLogoutHandler = () => {
    Logout(history)(dispatch)
  }

  return (
    <React.Fragment>
      <Menu pointing secondary>
        <Menu.Item as={Link} to='/'>
          <Image src={img} width={60}
            style={{ alignSelf: 'center', width: '40px' }} />
        </Menu.Item>
        <Menu.Item style={{ fontSize: '24px', paddingLeft: '0' }}>
          My Contacts
        </Menu.Item>

        <Menu.Menu position='right' style={{ alignSelf: 'center' }}>
          {(pathname !== '/auth/register' && pathname !== '/auth/login') && <React.Fragment>

            {token && <Menu.Item>
              <Button as={Link} to='/contacts/create'
                animated='fade' basic color='green'>
                <Button.Content visible>New Contact</Button.Content>
                <Button.Content hidden>
                  <Icon name='add' />
                </Button.Content>
              </Button>
            </Menu.Item>}

            {token ?
              < Menu.Item >
                <Button animated='fade' onClick={userLogoutHandler} basic color='red'>
                  <Button.Content visible>Logout</Button.Content>
                  <Button.Content hidden>
                    <Icon name='log out' />
                  </Button.Content>
                </Button>
              </Menu.Item >
              :
              <Menu.Item>
                <Button as={Link} to='/auth/login' animated='fade' basic color='green'>
                  <Button.Content visible>Login</Button.Content>
                  <Button.Content hidden>
                    <Icon name='sign in' />
                  </Button.Content>
                </Button>
              </Menu.Item>

            }

          </React.Fragment>}

          {pathname === '/auth/register' &&
            <Menu.Item>
              <Button as={Link} to='/auth/login' animated='fade' basic color='green'>
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden>
                  <Icon name='sign in' />
                </Button.Content>
              </Button>
            </Menu.Item>
          }

          {pathname === '/auth/login' &&
            <Menu.Item>
              <Button as={Link} to='/auth/register' animated='fade' basic color='orange'>
                <Button.Content visible>Register</Button.Content>
                <Button.Content hidden>
                  <Icon name='add user' />
                </Button.Content>
              </Button>
            </Menu.Item>
          }
        </Menu.Menu>
      </Menu>
    </React.Fragment>
  )
}


export default Header


