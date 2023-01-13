'use client'

import {
  Environment,
  graphql,
  PreloadedQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
} from 'react-relay'
import { getCurrentEnvironment } from 'src/relay/environment'
import { SerializablePreloadedQuery } from 'src/relay/loadSerializableQuery'
import useSerializablePreloadedQuery from 'src/relay/useSerializablePreloadedQuery'
import Layout from 'src/components/Layout'
import UserDetails from 'src/components/UserDetails/UserDetails'
import Card from 'src/components/Card'
import MyStories from 'src/components/feed/MyStories'
import UserPageQueryNode, {
  UserPageQuery,
} from '__generated__/UserPageQuery.graphql'
import { Suspense } from 'react'

const UserQuery = graphql`
  query UserPageQuery($handle: String!) {
    user(handle: $handle) {
      handle
      ...UserDetails_user
      ...MyStories__Query
    }
  }
`
type StoryProps = {
  preloadedQuery: SerializablePreloadedQuery<
    typeof UserPageQueryNode,
    UserPageQuery
  >
  cookies: string
}

export default function UserContainer({ preloadedQuery, cookies }: StoryProps) {
  const environment = getCurrentEnvironment(cookies)
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery)
  return (
    <RelayEnvironmentProvider environment={environment as Environment}>
      <Suspense fallback="Loading...">
        <User queryRef={queryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

function User(props: { queryRef: PreloadedQuery<UserPageQuery> }) {
  const data = usePreloadedQuery(UserQuery, props.queryRef)
  if (!data.user) {
    return <>User Not Found</>
  }
  return (
    <div>
      <Layout
        sidebarContentRight={<>UserPage right sidebar</>}
        sidebarContentLeft={
          <Card>
            <UserDetails user={data.user} />
          </Card>
        }
      >
        <MyStories user={data.user} />
      </Layout>
    </div>
  )
}
