import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Register = ({ formHandle: { form, onChange, formField, formValid } }) => {

  const formElementsArray = []
  for (let key in formField) {
    formElementsArray.push({
      id: key,
      config: formField[key]
    })
  }

  return (
    <Grid centered>
      <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
        <Segment>
          <Form>
            {formElementsArray.map(el => (
              <Form.Field key={el.id}>
                <Form.Input
                  type={el.config.type}
                  value={form[el.config.name] || ''}
                  onChange={onChange}
                  placeholder={el.config.label}
                  label={el.config.label}
                  name={el.config.name} />
              </Form.Field>
            ))}

            <Form.Field>
              <Button
              disabled={!formValid}
                type='submit'
                primary
                fluid>Submit</Button>
            </Form.Field>

            <Form.Field>
              <label>Already have an account ?{" "}
                <Link to='/auth/login'>Login Here</Link></label>
            </Form.Field>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Register
