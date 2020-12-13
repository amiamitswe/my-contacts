import React from 'react'
import { Icon, Image } from 'semantic-ui-react'
import classes from './ImageThumb.module.css'

const ImageThumb = ({
  firstName,
  lastName,
  src,
  style,
  secondaryClass = null,
  isFavorite,
  handleFavorite }) => {

  const NewClassName = [classes.ImageThumb, secondaryClass].join(' ')

  let thumbImage =
    <div
      className={handleFavorite ? classes.ThumbImgWrap : null}
      onClick={handleFavorite} >
      <Image
        className={NewClassName}
        src={src}
        style={style} />
      {isFavorite && <Icon
        className={classes.IsFavorite}
        name='heart' />}
    </div>
    
  if (src === null) {
    const nameLetter = firstName[0] + '' + lastName[0]
    thumbImage =
      <div
        className={handleFavorite ? classes.ThumbImgWrap : null}
        onClick={handleFavorite} >
        <h1
          className={NewClassName}
          style={style}>{nameLetter}</h1>
        {isFavorite &&
          <Icon
            className={classes.IsFavorite}
            name='heart' />}

      </div>
  }

  return thumbImage
}

export default ImageThumb
