import type { NextPage } from 'next'
import UserDetails from '../components/UserDetails'
import { graphql, usePreloadedQuery } from 'react-relay';
import { withRelay, RelayProps } from 'relay-nextjs';
import {pages_UserQuery} from '../queries/__generated__/pages_UserQuery.graphql'
import { getClientEnvironment } from '../lib/client_environment';
import Card from '../components/Card';
import RelevantIssues from '../components/issue/RelevantIssues';
import IssuesFromLastRepo from '../components/issue/IssuesFromLastRepo';
import IssuesFromRecentRepos from '../components/issue/IssuesFromRecentRepo';


const FeedsQuery = graphql`
  query pages_UserQuery{ 
    viewer { 
      handle
      ...BadgeList_user
      ...RelevantIssues
      ...IssuesFromLastRepo
      ...IssuesFromRecentRepos
    }
  }
`
const Home: NextPage = ({ preloadedQuery }: RelayProps<{}, pages_UserQuery>) => {
  const query = usePreloadedQuery(FeedsQuery, preloadedQuery);
  return (
    <div className="mx-auto bg-gray-100 p-4 px-20">
      <div className="grid grid-cols-9 gap-10">
        <div className="col-span-2">
          <Card>
            <UserDetails user={query.viewer}/>
          </Card>
        </div>
        <div className="col-span-5">
          <Card>Posts</Card>
          <IssuesFromLastRepo user={query.viewer} />
          <IssuesFromRecentRepos user={query.viewer} />
          <RelevantIssues user={query.viewer} />
        </div>
        <div className="col-span-2">
          <Card>Promoted</Card>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default withRelay(Home, FeedsQuery, {
  createClientEnvironment: () => getClientEnvironment()!,
  createServerEnvironment: async (ctx) => {

    const { createServerEnvironment } = await import(
      '../lib/server/server_environment'
    );

    return createServerEnvironment(ctx);
  },
});



