import React from 'react'
import { Container, Image, List, Placeholder } from 'semantic-ui-react'

const ListLoader = ({ state: { contacts: { loading, error, data } } }) => {
  // console.log(data)
  // console.log(loading)
  // console.log(error)

  let contactData
  if (data.length) {
    contactData = <List>
      {data.map((el, index) => (
        <List.Item key={index}>
          <List.Content floated='left'>
            <Image width='45' src={el.contact_picture} />
          </List.Content>
          <List.Content floated='right'>
            <span>{el.phone_number}</span>
          </List.Content>
          <span>{el.first_name} {el.last_name}</span>
        </List.Item>
      ))}
    </List>
  }

  else {
    contactData = <h2>No Contact found</h2>
  }

  return (
    <Container>
      {loading && <Placeholder>
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
      </Placeholder>}

      {contactData}
    </Container>
  )
}

export default ListLoader
