import type { NextPage } from 'next'
import UserDetails from '../components/UserDetails'
import { graphql, usePreloadedQuery } from 'react-relay';
import { withRelay, RelayProps } from 'relay-nextjs';
import {pages_UserQuery} from '../queries/__generated__/pages_UserQuery.graphql'
import { getClientEnvironment } from '../lib/client_environment';
import Card from '../components/Card';
import IssueList from '../components/issue/IssueList';


const FeedsQuery = graphql`
  query pages_UserQuery{ 
    viewer { 
      handle
      ...BadgeList_user
      ...IssueList
    }
  }
`
const Home: NextPage = ({ preloadedQuery }: RelayProps<{}, pages_UserQuery>) => {
  const query = usePreloadedQuery(FeedsQuery, preloadedQuery);
  return (
    <div className="container mx-auto bg-gray-100 p-4">
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Card>
            <UserDetails user={query.viewer}/>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>Posts</Card>
        </div>
        <div>
          <Card>Promoted</Card>
        </div>
      </div>
      <div>
        <IssueList user={query.viewer} />
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



