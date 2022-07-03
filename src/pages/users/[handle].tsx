import { useRouter } from 'next/router'
import { NextPageContext } from 'next'
import { graphql, usePreloadedQuery } from 'react-relay'
import { RelayProps, withRelay } from 'relay-nextjs'
import Layout from '../../components/Layout'
import { getClientEnvironment } from '../../lib/client_environment'
import Card from '../../components/Card'
import UserDetails from '../../components/UserDetails/UserDetails'
import { pages_UserQuery } from '../../queries/__generated__/pages_UserQuery.graphql'
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'
import { UserDetails_user$key } from '../../queries/__generated__/UserDetails_user.graphql'

const UserQuery = graphql`
  query pages_UserQuery {
    viewer {
      handle
      ...UserDetails_user
    }
  }
`

const User = ({
  preloadedQuery,
}: RelayProps<Record<string, never>, pages_UserQuery>) => {
  const query = usePreloadedQuery(UserQuery, preloadedQuery)
  const router = useRouter()
  const { handle } = router.query

  return (
    <div>
      <Layout
        sidebarContentRight={handle}
        sidebarContentLeft={
          <Card>
            <UserDetails user={query.viewer as UserDetails_user$key} />
          </Card>
        }
      >
        {handle}
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
