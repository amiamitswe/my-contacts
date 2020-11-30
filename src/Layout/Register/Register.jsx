import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Grid centered>
      <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
        <Segment>
          <Form>
            <Form.Field>
              <Form.Input placeholder='Username' label='Username' name='username' />
            </Form.Field>
            <Form.Field>
              <Form.Input placeholder='First Name' label='First Name' name='firstName' />
            </Form.Field>
            <Form.Field>
              <Form.Input placeholder='Last Name' label='Last Name' name='lastName' />
            </Form.Field>
            <Form.Field>
              <Form.Input placeholder='Email' label='Email' name='email' type='email' />
            </Form.Field>
            <Form.Field>
              <Form.Input placeholder='Password' label='Password' name='password' type='password' />
            </Form.Field>
            <Form.Field>
              <Form.Input placeholder='Confirm Password' label='Confirm Password' name='confirmPassword' type='password' />
            </Form.Field>
            <Form.Field>
              <Button type='submit' primary fluid>Submit</Button>
            </Form.Field>

            <Form.Field>
              <label>Already have an account ? <Link to='/auth/login'>Login Here</Link></label>
            </Form.Field>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Register
