import type { NextPage } from 'next'
import Feeds from '../components/Feeds'
import { graphql, usePreloadedQuery } from 'react-relay';
import { withRelay, RelayProps } from 'relay-nextjs';
import {pages_FeedsQuery} from '../queries/__generated__/pages_FeedsQuery.graphql'
import { getClientEnvironment } from '../lib/client_environment';
import Container from '../components/Container';


const FeedsQuery = graphql`
  query pages_FeedsQuery{ 
    viewer { 
      handle
      ...BadgeList_user
    }
  }
`
const Home: NextPage = ({ preloadedQuery }: RelayProps<{}, pages_FeedsQuery>) => {
  const query = usePreloadedQuery(FeedsQuery, preloadedQuery);
  console.log("query -----", query)
  return (
    <Container>
      <Feeds user={query.viewer}/>
    </Container>
  )
}

export default withRelay(Home, FeedsQuery, {
  createClientEnvironment: () => getClientEnvironment()!,
  createServerEnvironment: async () => {
    const { createServerEnvironment } = await import(
      '../lib/server/server_environment'
    );

    return createServerEnvironment();
  },
});



