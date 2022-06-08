import { useRouter } from 'next/router'

const User = () => {
  const router = useRouter()
  const { handle } = router.query

  return <h1>Welcome {handle}</h1>
}

export default User