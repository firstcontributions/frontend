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
        bio
        reputation {
          value
        }
      }
    `,
    user
  )

  return (
    <div className="flex">
      <img
        src={data.avatar}
        alt={`${data.handle}'s avatar`}
        className="w-12 h-12 rounded-sm"
      />
      <div className="flex flex-col mx-2">
        <div className="flex flex-row">
          <Link href={`/${data.handle}`}>
            <a className=" font-bold">{`@${data.handle}`}</a>
          </Link>
          <span className="bg-sky-400/20 text-sky-600 px-2 ml-2 rounded-md text-sm font-bold leading-6">
            {data.reputation.value}
          </span>
        </div>
        <span className=" text-sm">{data.bio}</span>
      </div>
    </div>
  )
}

export default UserSnippet
