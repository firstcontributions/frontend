import Button from './Button'
import Card from './Card'

const Login = () => (
  <Card>
    <a
      href={encodeURI(
        'http://api.firstcontributions.com/v1/auth/redirect?origin=http://app.firstcontributions.com'
      )}
    >
      <Button>Login with github</Button>
    </a>
  </Card>
)

export default Login
