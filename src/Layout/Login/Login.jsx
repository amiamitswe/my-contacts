import React from 'react'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Login = ({ formHandle: { form, onChange, loading,error, loginFormValid, onSubmit } }) => {
  return (
    <Grid centered>
      <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
        <Segment>
          <Form>

            {error && <Message negative content={error} />}

            <Form.Field>
              <Form.Input
                value={form.username || ''}
                onChange={onChange}
                placeholder='Username'
                label='Username'
                name='username'
              />
            </Form.Field>

            <Form.Field>
              <Form.Input
                value={form.password || ''}
                onChange={onChange}
                placeholder='Password'
                label='Password'
                name='password'
                type='password'
              />
            </Form.Field>

            <Form.Field>
              <Button
                onClick={onSubmit}
                disabled={loginFormValid || loading}
                type='submit'
                loading={loading}
                primary
                fluid>Submit</Button>
            </Form.Field>

            <Form.Field>
              <label>Don't have an account ?{" "}
                <Link to='/auth/register'>Register Here</Link></label>
            </Form.Field>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Login
