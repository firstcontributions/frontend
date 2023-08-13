import Button from './Button'
import Card from './Card'

const Login = () => (
  <Card classes="flex justify-center">
    <a
      href={encodeURI(process.env.NEXT_PUBLIC_O_AUTH_REDIRECTION_URL as string)}
    >
      <Button>Login with github</Button>
    </a>
  </Card>
)

export default Login
