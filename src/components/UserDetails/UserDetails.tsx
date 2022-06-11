import { graphql, useFragment } from 'react-relay';
import BadgeList from './Badges/BadgeList';
import type {UserDetails_user$key} from '../../queries/__generated__/UserDetails_user.graphql';
import { useState, ChangeEvent, FormEventHandler } from 'react';
import Bio from './Bio';

type Props = {
    user: UserDetails_user$key,
};

const UserDetails = ({user}: Props)=> {
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
        `, user
    );

    


    return (<div className="flex flex-col items-center">
        <img className="rounded-md w-32" src={data.avatar} alt={data.handle} />
        <h1>
            @{data.handle}
        </h1>
        <Bio user={data}/>
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