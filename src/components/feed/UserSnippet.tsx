import Link from 'next/link'
import { graphql, useFragment } from 'react-relay'
import { UserSnippet_user$key } from '../../queries/__generated__/UserSnippet_user.graphql'
import { getCompactNumber } from '../../utils/formatNumber'

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
    <div className="flex flex-col">
      <Link href={`/@${data.handle}`}>
        <a className=" font-bold">
          <div className="flex min-h-32">
            <img
              src={data.avatar}
              alt={`${data.handle}'s avatar`}
              className="w-16 h-16 rounded-full -mt-8 border-4 dark:border-dark-700 bg-white  dark:bg-dark-500"
            />
            <div className="flex flex-row mt-2">
              {`@${data.handle}`}
              <span className="bg-sky-400/20 text-sky-600 px-2 ml-2 mb-2 rounded-md text-sm font-bold leading-6">
                {getCompactNumber(data.reputation.value)}
              </span>
            </div>
          </div>
          <span className=" text-sm">{data.bio}</span>
        </a>
      </Link>
    </div>
  )
}

export default UserSnippet
