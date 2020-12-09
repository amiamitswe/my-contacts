import React from 'react'
import { Prompt } from 'react-router-dom'
import { Button, Card, Form, Grid, Header, Icon, Image, Segment, Select } from 'semantic-ui-react'
import countries from '../../../../Utils/countries'

const Create = ({ onChange, onSubmit, formInvalid, formIsHalfFiled, onImageChange, loading, imageFile }) => {

  const picDiv = {
    width: '175px',
    height: '175px',
    border: '1px solid #131',
    borderRadius: '50%',
    margin: '15px auto 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  // image function start 
  const imagePickerRef = React.useRef(null)

  const chooseImage = () => {
    if (imagePickerRef.current) {
      imagePickerRef.current.click()
    }
  }
  // image function end


  return (
    <div>

      <Prompt
        when={formIsHalfFiled}
        message={JSON.stringify({
          header: 'Confirm ?',
          content: 'Are you sure to leave? There are unsaved changed !!'
        })} />

      <Grid centered>
        <Grid.Column style={{ maxWidth: '650px' }}>
          <Header>
            Create Your Contact
          </Header>
          <Card fluid>
            <Card.Content>
              <Form unstackable>

                {/* select image from user and show preview start */}
                <Segment placeholder>
                  <input
                    onChange={onImageChange}
                    ref={imagePickerRef}
                    type="file"
                    hidden
                  />
                  {imageFile ?
                    <Image style={picDiv} src={imageFile} /> :
                    <div style={picDiv} onClick={chooseImage}>
                      <span>Select Picture</span>
                    </div>
                  }
                  <Button animated onClick={chooseImage} primary basic >
                    <Button.Content visible>{imageFile ? 'Change Photo' : 'Add Photo'}</Button.Content>
                    <Button.Content hidden>

                      <Icon name={imageFile ? 'image' : 'add'} />
                    </Button.Content>
                  </Button>
                </Segment>
                {/* select image from user and show preview end */}

                <Form.Group widths={2} style={{ marginBottom: '10px' }}>
                  <Form.Input
                    name='first_name'
                    onChange={onChange}
                    label='First name'
                    placeholder='First name' />
                  <Form.Input
                    name='last_name'
                    onChange={onChange}
                    label='Last name'
                    placeholder='Last name' />
                </Form.Group>
                <Form.Group widths={2} style={{ marginBottom: '10px' }}>
                  <Form.Input
                    name='country_code'
                    onChange={onChange}
                    control={Select}
                    options={countries}
                    label='Country'
                    placeholder='Country' />
                  <Form.Input
                    name='phone_number'
                    onChange={onChange}
                    label='Phone Number'
                    placeholder='Phone Number' />
                </Form.Group>
                <Form.Checkbox
                  onChange={(e, data) => {
                    onChange(e, { name: 'is_favorite', value: data.checked })
                  }}
                  label='Add to favorite' />
                <Button
                  disabled={formInvalid || loading}
                  onClick={onSubmit}
                  type='submit'
                  loading={loading}
                  primary
                  fluid
                >Submit</Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column >
      </Grid>
    </div>
  )
}

export default Create
