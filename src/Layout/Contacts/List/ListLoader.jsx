import React from 'react'
import { Container, Header, List, Message, Placeholder } from 'semantic-ui-react'
import ImageThumb from '../../../Components/ImageThumb/ImageThumb'
import limitTitle from '../../../Helper/shortText'
import Favorite from '../Favorite/Favorite'
import classes from './ListLoader.module.css'

const ListLoader = ({ state: { contacts: { loading, error, data } } }) => {

  const favoriteContacts = data.filter(item => item.is_favorite)

  console.log(favoriteContacts)

  let contactData
  if (loading) {
    contactData = <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
  }
  else if (error) {
    contactData = <Message
      content={error}
    />
  }

  else if (data.length === 0) {
    contactData = <Message
      content='No Contacts yet..... 😥'
    />
  }

  else if (data.length > 0) {
    contactData = <List divided relaxed>
      {data.map((el, index) => (
        <List.Item key={index} className={classes.Contact_List}>
          <List.Content
            floated='left'
            className={classes.Contact_List_Item}
          >
            <ImageThumb
              firstName={el.first_name}
              lastName={el.last_name}
              src={el.contact_picture}
            />
            <h2 className={classes.ContactNameD}>{el.first_name} {el.last_name}</h2>
            <h2 className={classes.ContactNameM}>{limitTitle(el.first_name, el.last_name, 12)}</h2>
          </List.Content>
          <List.Content floated='right' className={classes.Contact_Number}>
            <span className={classes.ContactNumberD} >{el.phone_number}</span>
            <span className={classes.ContactNumberM} >{limitTitle(el.phone_number, '', 13)}</span>
          </List.Content>

        </List.Item>
      ))}
    </List>
  }

  return (
    <Container>

      <div style={{ textAlign: 'left' }}>
        {favoriteContacts.length > 0 && <React.Fragment>
          <Header>My Favorite Contacts</Header>
          <Favorite
            favorites={favoriteContacts}
            loading={loading} />
        </React.Fragment>}
        <Header>All Contacts</Header>
      </div>
      {contactData}

    </Container>
  )
}

export default ListLoader
