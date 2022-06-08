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
import Layout from '../components/Layout';


const FeedsQuery = graphql`
  query pages_UserQuery{ 
    viewer { 
      handle
      ...UserDetails_user
      ...RelevantIssues
      ...IssuesFromLastRepo
      ...IssuesFromRecentRepos
    }
  }
`
const Home: NextPage = ({ preloadedQuery }: RelayProps<{}, pages_UserQuery>) => {
  const query = usePreloadedQuery(FeedsQuery, preloadedQuery);
  const leftSidebar = (
    <Card>
      <UserDetails user={query.viewer}/>
    </Card>
  )
  return (
    <Layout sidebarContentLeft={leftSidebar} sidebarContentRight={<div>Promoted</div>}>
      <Card>Posts</Card>
      <IssuesFromLastRepo user={query.viewer} />
      <IssuesFromRecentRepos user={query.viewer} />
      <RelevantIssues user={query.viewer} />
    </Layout>
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



