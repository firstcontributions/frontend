'use client'

import { headers } from 'next/headers'
import { useRouter } from 'next/router'
import {
  Environment,
  graphql,
  RelayEnvironmentProvider,
  usePreloadedQuery,
} from 'react-relay'
import { getCurrentEnvironment } from 'src/relay/environment'
import loadSerializableQuery from 'src/relay/loadSerializableQuery'
import useSerializablePreloadedQuery from 'src/relay/useSerializablePreloadedQuery'
import Layout from 'src/components/Layout'
import UserDetails from 'src/components/UserDetails/UserDetails'
import Handle_UserQueryNode, {
  Handle_UserQuery,
} from '__generated__/Handle_UserQuery.graphql'
import Card from 'src/components/Card'
import MyStories from 'src/components/feed/MyStories'

const UserQuery = graphql`
  query Handle_UserQuery($handle: String!) {
    user(handle: $handle) {
      handle
      ...UserDetails_user
      ...MyStories__Query
    }
  }
`
export default async function User() {
  const requestCookie = headers().get('cookie')
  const environment = getCurrentEnvironment(requestCookie ?? '')
  const router = useRouter()
  const { handle } = router.query
  const preloadedQuery = await loadSerializableQuery<
    typeof Handle_UserQueryNode,
    Handle_UserQuery
  >(
    Handle_UserQueryNode.params,
    { handle: (handle as string) ?? '' },
    requestCookie ?? ''
  )
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery)
  const data = usePreloadedQuery(UserQuery, queryRef)
  return (
    <RelayEnvironmentProvider environment={environment as Environment}>
      <div>
        <Layout
          sidebarContentRight={handle}
          sidebarContentLeft={
            <Card>
              <UserDetails user={data.user} />
            </Card>
          }
        >
          <MyStories user={data.user} />
        </Layout>
      </div>
    </RelayEnvironmentProvider>
  )
}
