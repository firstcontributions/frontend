import { useRouter } from 'next/router'
import { NextPageContext } from 'next'
import { graphql, usePreloadedQuery } from 'react-relay'
import { RelayProps, withRelay } from 'relay-nextjs'
import Layout from '../../components/Layout'
import { getClientEnvironment } from '../../lib/client_environment'
import Card from '../../components/Card'
import UserDetails from '../../components/UserDetails/UserDetails'
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'
import MyStories from '../../components/feed/MyStories'
import { Handle_UserQuery } from '../../queries/__generated__/Handle_UserQuery.graphql'

const UserQuery = graphql`
  query Handle_UserQuery($handle: String!) {
    user(handle: $handle) {
      handle
      ...UserDetails_user
      ...MyStories__Query
    }
  }
`

const User = ({
  preloadedQuery,
}: RelayProps<Record<string, never>, Handle_UserQuery>) => {
  const query = usePreloadedQuery(UserQuery, preloadedQuery)
  const router = useRouter()
  const { handle } = router.query

  return (
    <div>
      <Layout
        sidebarContentRight={handle}
        sidebarContentLeft={
          <Card>
            <UserDetails user={query.user} />
          </Card>
        }
      >
        <MyStories user={query.user} />
      </Layout>
    </div>
  )
}

export default withRelay(User, UserQuery, {
  createClientEnvironment: () =>
    getClientEnvironment() as RelayModernEnvironment,
  createServerEnvironment: async (ctx: NextPageContext) => {
    const { createServerEnvironment } = await import(
      '../../lib/server/server_environment'
    )

    return createServerEnvironment(ctx)
  },
})
