import Link from 'next/link'
import { graphql, useFragment } from 'react-relay'
import { UserSnippet_user$key } from '../../queries/__generated__/UserSnippet_user.graphql'

type UserSnippetProps = {
  user: UserSnippet_user$key
}

const UserSnippet = ({ user }: UserSnippetProps) => {
  const data = useFragment(
    graphql`
      fragment UserSnippet_user on User {
        avatar
        id
        handle
        reputation {
          value
        }
      }
    `,
    user
  )

  const hanlde = `@${data.handle}`
  console.log(hanlde)
  return (
    <div className="flex">
      <img src={data.avatar} alt={data.handle} className="w-8 h-8 rounded-sm" />
      <Link href={`/${hanlde}`}> {data.handle} </Link>
    </div>
  )
}

export default UserSnippet
