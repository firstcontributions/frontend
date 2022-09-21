import { NextPageContext } from 'next'
import { graphql, usePreloadedQuery } from 'react-relay'
import { RelayProps, withRelay } from 'relay-nextjs'
import Layout from '../../components/Layout'
import { getClientEnvironment } from '../../lib/client_environment'
import Card from '../../components/Card'
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'
import IssuesFromLastRepo from '../../components/issue/IssuesFromLastRepo'
import IssuesFromRecentRepos from '../../components/issue/IssuesFromRecentRepo'
import RelevantIssues from '../../components/issue/RelevantIssues'
import { issuesQuery } from '../../queries/__generated__/issuesQuery.graphql'
import UserDetails from '../../components/UserDetails/UserDetails'

const IssuesQuery = graphql`
  query issuesQuery {
    viewer {
      handle
      ...UserDetails_user
      ...RelevantIssues
      ...IssuesFromLastRepo
      ...IssuesFromRecentRepos
    }
  }
`

const Issues = ({
  preloadedQuery,
}: RelayProps<Record<string, never>, issuesQuery>) => {
  const query = usePreloadedQuery(IssuesQuery, preloadedQuery)

  return (
    <div>
      {query.viewer && (
        <Layout
          sidebarContentRight={query.viewer.handle}
          sidebarContentLeft={
            <Card>
              <UserDetails user={query.viewer} />
            </Card>
          }
        >
          <IssuesFromLastRepo user={query.viewer} />
          <IssuesFromRecentRepos user={query.viewer} />
          <RelevantIssues user={query.viewer} />
        </Layout>
      )}
    </div>
  )
}

export default withRelay(Issues, IssuesQuery, {
  createClientEnvironment: () =>
    getClientEnvironment() as RelayModernEnvironment,
  createServerEnvironment: async (ctx: NextPageContext) => {
    const { createServerEnvironment } = await import(
      '../../lib/server/server_environment'
    )

    return createServerEnvironment(ctx)
  },
})
