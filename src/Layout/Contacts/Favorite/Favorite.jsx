import React, { useRef } from 'react'
import { Icon, Placeholder, Segment } from 'semantic-ui-react'
import ImageThumb from '../../../Components/ImageThumb/ImageThumb'
import limitTitle from '../../../Helper/shortText'
import classes from './Favorite.module.css'

const Favorite = ({ favorites, loading }) => {

  const screenWidth = window.screen.width > 767

  const listRef = useRef(null)
  const showLeftRight = favorites.length > 3


  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: 'smooth'
      })
    }
  }

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -500,
        behavior: 'smooth'
      })
    }
  }


  const ArrowControl = ({ name, onClick }) => {
    return (
      <Icon
        name={name}
        className={screenWidth ? classes.left_right : null}
        size={screenWidth ? 'big' : 'large'}
        color='teal'
        onClick={onClick} />
    )
  }

  let favoriteContacts
  if (loading) {
    favoriteContacts = <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
    </Placeholder>
  }

  else if (favorites.length > 0) {
    favoriteContacts =
      <div className={classes.items_wrap}>
        {showLeftRight &&
          <ArrowControl
            onClick={scrollLeft}
            name='pointing left'
          />
        }

        <div className={classes.items_container} ref={listRef}>
          {favorites.map(contact => (
            <div key={contact.id}
              className={classes.single_item_container}>
              <ImageThumb
                secondaryClass={classes.Favorite_thumb}
                firstName={contact.first_name}
                lastName={contact.last_name}
                src={contact.contact_picture} />
              <p className={classes.name}>
                {limitTitle(contact.first_name
                  , contact.last_name, 10)}

              </p>
            </div>
          ))}
        </div>
        {showLeftRight &&
          <ArrowControl
            onClick={scrollRight}
            name='pointing right'
          />
        }
      </div>
  }

  else {
    favoriteContacts = <h2>No Favorite Contacts</h2>
  }

  return (
    <Segment placeholder className={classes.Favorite_Slider}>
      {favoriteContacts}
    </Segment>

  )
}

export default Favorite
