import React from 'react'
import { Image } from 'semantic-ui-react'
import classes from './ImageThumb.module.css'

const ImageThumb = ({ firstName, lastName, src, style, secondaryClass = null }) => {


  const NewClassName = [classes.ImageThumb, secondaryClass].join(' ')

  let thumbImage = <Image className={NewClassName} src={src} style={style} />
  if (src === null) {
    const nameLetter = firstName[0] + '' + lastName[0]
    thumbImage = <h1 className={NewClassName} style={style}>{nameLetter}</h1>
  }

  return thumbImage
}

export default ImageThumb
