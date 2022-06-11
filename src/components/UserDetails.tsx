import { graphql, useFragment } from 'react-relay'
import BadgeList from './BadgeList'
import { GoIssueOpened } from '@react-icons/all-files/go/GoIssueOpened'
import { GoGitPullRequest } from '@react-icons/all-files/go/GoGitPullRequest'

const UserDetails = ({user})=> {
    const data = useFragment(
        graphql`
            fragment UserDetails_user on User {
                handle
                avatar
                bio
                gitContributionStats {
                    issues
                    pullRequests
                }
                ...BadgeList_user
            }
        `, user
    )
    return (<div className="flex flex-col items-center">
        <img className="rounded-full" src={data.avatar} alt={data.handle} />
        <h1>
            @{data.handle}
        </h1>
        <div className="my-4">
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