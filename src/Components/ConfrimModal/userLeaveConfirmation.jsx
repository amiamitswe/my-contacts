import React from 'react'
import ReactDOM from 'react-dom'
import { Confirm, TransitionablePortal } from 'semantic-ui-react'

const userLeaveConfirmation = (message, callback, open, setOpen) => {

  const container = document.createElement('div')
  container.setAttribute('custom-confirm-view', '')

  const handleOpen = (callbackState) => {
    ReactDOM.unmountComponentAtNode(container)
    callback(callbackState)
    setOpen(false)
  }

  const handleClose = () => {
    ReactDOM.unmountComponentAtNode(container)
    callback()
    setOpen(false)
  }

  document.body.appendChild(container)

  const { header, content } = JSON.parse(message)

  ReactDOM.render(

    <TransitionablePortal open={open} onClose={handleClose}>
      <Confirm
        open={open}
        header={header}
        onCancel={handleClose}
        onConfirm={handleOpen}
        content={content}
        centered={false}
      />
    </TransitionablePortal>
    , container
  )
}

export default userLeaveConfirmation
