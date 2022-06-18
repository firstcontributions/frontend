import Button from '../components/Button'

export default function Home() {
  const handleLogin = async () => {
    fetch('https://api.github.com')
  }
  return (
    <div className="container p-8">
      <Button onClick={handleLogin}>Login with GitHub</Button>
    </div>
  )
}
