import { graphql, useFragment } from 'react-relay'
import BadgeList from './BadgeList'

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
        <p>{data.bio}</p>
        <span className="font-bold mr-4 block">
            Issues: {" "}
            {data.gitContributionStats.issues}
        </span>
        <span className="font-bold mr-4 block">
            Pull Requets: {" "} 
            {data.gitContributionStats.pullRequests}
        </span>
        <BadgeList user={data} />
    </div>
)
    }

export default UserDetails