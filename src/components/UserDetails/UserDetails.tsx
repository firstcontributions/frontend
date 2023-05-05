import { graphql, useFragment } from 'react-relay'
import BadgeList from './Badges/BadgeList'
import type { UserDetails_user$key } from '../../queries/__generated__/UserDetails_user.graphql'
import Bio from './Bio'
import { GoIssueOpened } from '@react-icons/all-files/go/GoIssueOpened'
import { GoGitPullRequest } from '@react-icons/all-files/go/GoGitPullRequest'

type GitContributionStats = {
  issues: number;
  pullRequests: number;
}

type User = {
  id: string;
  handle: string;
  avatar: string;
  gitContributionStats: GitContributionStats;
}

type Props = {
  user: UserDetails_user$key
}

const UserDetails = ({ user }: Props): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment UserDetails_user on User {
        id
        handle
        avatar
        ...Bio_user
        gitContributionStats {
          issues
          pullRequests
        }
        ...BadgeList_user
      }
    `,
    user
  )

  return (
    <div className="flex flex-col items-center">
      <img className="rounded-md w-20" src={data.avatar} alt={data.handle} />
      <h1 className="dark:text-gray-400">@{data.handle}</h1>
      <Bio user={data} />
      <div className="my-4 flex space-x-4 dark:text-gray-400">
        <span className="font-bold mb-2 flex">
          <span className="text-2xl mr-2">
            <GoIssueOpened />
          </span>
          {data.gitContributionStats.issues}
        </span>
        <span className="font-bold mr-4 flex">
          <span className="text-2xl mr-2">
            <GoGitPullRequest />
          </span>
          {data.gitContributionStats.pullRequests}
        </span>
      </div>
      <BadgeList user={data} />
    </div>
  )
}

export default UserDetails
