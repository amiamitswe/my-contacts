import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Register = ({ formHandle: { form, onChange, loading, fieldErrors, registerFormValid, onSubmit } }) => {
  return (
    <Grid centered>
      <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
        <Segment>
          <Form>
            <Form.Field>
              <Form.Input
                value={form.username || ''}
                onChange={onChange}
                placeholder='Username'
                label='Username'
                name='username'
                error={
                  fieldErrors.username && {
                    content: fieldErrors.username,
                    pointing: 'below'
                  }
                }
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                value={form.firstName || ''}
                onChange={onChange}
                placeholder='First Name'
                label='First Name'
                name='firstName'
                error={
                  fieldErrors.first_name && {
                    content: fieldErrors.first_name,
                    pointing: 'below'
                  }
                } />
            </Form.Field>
            <Form.Field>
              <Form.Input
                value={form.lastName || ''}
                onChange={onChange}
                placeholder='Last Name'
                label='Last Name'
                name='lastName' 
                error={
                  fieldErrors.last_name && {
                    content: fieldErrors.last_name,
                    pointing: 'below'
                  }
                }/>
            </Form.Field>
            <Form.Field>
              <Form.Input
                value={form.email || ''}
                onChange={onChange}
                placeholder='Email'
                label='Email'
                name='email'
                type='email'
                error={
                  fieldErrors.email && {
                    content: fieldErrors.email,
                    pointing: 'below'
                  }
                } />
            </Form.Field>
            <Form.Field>
              <Form.Input
                value={form.password || ''}
                onChange={onChange}
                placeholder='Password'
                label='Password'
                name='password'
                type='password'
                error={
                  fieldErrors.password && {
                    content: fieldErrors.password,
                    pointing: 'below'
                  }
                } />
            </Form.Field>
            <Form.Field>
              <Form.Input
                value={form.confirmPassword || ''}
                onChange={onChange}
                placeholder='Confirm Password'
                label='Confirm Password'
                name='confirmPassword'
                type='password'
                error={
                  fieldErrors.password && {
                    content: 'Password should be same',
                    pointing: 'below'
                  }
                } />
            </Form.Field>
            <Form.Field>
              <Button
                onClick={onSubmit}
                disabled={registerFormValid || loading}
                type='submit'
                loading={loading}
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
