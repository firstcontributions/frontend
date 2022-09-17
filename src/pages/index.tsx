import type { NextPageContext } from 'next'
import UserDetails from '../components/UserDetails/UserDetails'
import { graphql, usePreloadedQuery } from 'react-relay'
import { withRelay, RelayProps } from 'relay-nextjs'
import { pages_UserQuery } from '../queries/__generated__/pages_UserQuery.graphql'
import { getClientEnvironment } from '../lib/client_environment'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Login from '../components/Login'
import Feed from '../components/feed/Feed'
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'

const RootQuery = graphql`
  query pages_UserQuery {
    viewer {
      handle
      ...UserDetails_user
      ...RelevantIssues
      ...IssuesFromLastRepo
      ...IssuesFromRecentRepos
    }
    ...FeedsQuery
  }
`
const Home = ({
  preloadedQuery,
}: RelayProps<Record<string, never>, pages_UserQuery>) => {
  const query = usePreloadedQuery(RootQuery, preloadedQuery)
  let leftSidebar = <Login />
  if (query.viewer) {
    leftSidebar = (
      <Card>
        <UserDetails user={query.viewer} />
      </Card>
    )
  }

  return (
    <Layout
      sidebarContentLeft={leftSidebar}
      sidebarContentRight={<div>Promoted</div>}
    >
      {query.viewer && (
        <>
          <Feed root={query} />
        </>
      )}
    </Layout>
  )
}

export default withRelay(Home, RootQuery, {
  createClientEnvironment: () =>
    getClientEnvironment() as RelayModernEnvironment,
  createServerEnvironment: async (ctx: NextPageContext) => {
    const { createServerEnvironment } = await import(
      '../lib/server/server_environment'
    )

    return createServerEnvironment(ctx)
  },
})
