'use client'

import { Suspense } from 'react'
import { SerializablePreloadedQuery } from '../src/relay/loadSerializableQuery'
import MainViewQueryNode, {
  HomeQuery,
} from '../__generated__/HomeQuery.graphql'
import { getCurrentEnvironment } from '../src/relay/environment'
import {
  RelayEnvironmentProvider,
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  Environment,
} from 'react-relay'
import useSerializablePreloadedQuery from '../src/relay/useSerializablePreloadedQuery'
import Card from '../src/components/Card'
import Layout from '../src/components/Layout'
import Login from '../src/components/Login'
import Feed from '../src/components/feed/Feed'
import UserDetails from '../src/components/UserDetails/UserDetails'

const HomePage = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof MainViewQueryNode,
    HomeQuery
  >
  cookies: string
}) => {
  const environment = getCurrentEnvironment(props.cookies)
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  )

  return (
    <RelayEnvironmentProvider environment={environment as Environment}>
      <Suspense fallback="Loading...">
        <MainView queryRef={queryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

const RootQuery = graphql`
  query HomeQuery {
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

function MainView(props: { queryRef: PreloadedQuery<HomeQuery> }) {
  const data = usePreloadedQuery(RootQuery, props.queryRef)

  let leftSidebar = <Login />
  if (data.viewer) {
    leftSidebar = (
      <Card>
        <UserDetails user={data.viewer} />
      </Card>
    )
  }

  return (
    <Layout sidebarContentLeft={leftSidebar}>
      <>
        <Feed root={data} />
      </>
    </Layout>
  )
}

export default HomePage
