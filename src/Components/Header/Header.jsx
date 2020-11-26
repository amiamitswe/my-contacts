import React from 'react'
import { Menu, Image } from 'semantic-ui-react'

import img from '../../Assets/Img/logo.svg'
const Header = () => {
  return (
    <Menu secondary>
      <Image src={img} width={60} />
      <Menu.Item>
        My Contacts
      </Menu.Item>

      <Menu.Item position='right'>
        Create Contact
        </Menu.Item>

      <Menu.Item >
        Logout
        </Menu.Item>
    </Menu>
  )
}

export default Header