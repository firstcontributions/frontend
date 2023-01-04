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
import issuesQueryNode, { issuesQuery } from '__generated__/issuesQuery.graphql'
import Card from 'src/components/Card'
import IssuesFromLastRepo from 'src/components/issue/IssuesFromLastRepo'
import IssuesFromRecentRepos from 'src/components/issue/IssuesFromRecentRepo'
import RelevantIssues from 'src/components/issue/RelevantIssues'
import { Suspense } from 'react'

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
type IssuesProps = {
  preloadedQuery: SerializablePreloadedQuery<
    typeof issuesQueryNode,
    issuesQuery
  >
  cookies: string
}

export default function IssuesContainer({
  preloadedQuery,
  cookies,
}: IssuesProps) {
  const environment = getCurrentEnvironment(cookies)
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery)
  return (
    <RelayEnvironmentProvider environment={environment as Environment}>
      <Suspense fallback="Loading...">
        <Issues queryRef={queryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export function Issues(props: { queryRef: PreloadedQuery<issuesQuery> }) {
  const data = usePreloadedQuery(IssuesQuery, props.queryRef)
  if (!data.viewer) {
    return <></>
  }
  return (
    <div>
      <Layout
        sidebarContentRight={<></>}
        sidebarContentLeft={
          <Card>
            <UserDetails user={data.viewer} />
          </Card>
        }
      >
        <IssuesFromLastRepo user={data.viewer} />
        <IssuesFromRecentRepos user={data.viewer} />
        <RelevantIssues user={data.viewer} />
      </Layout>
    </div>
  )
}
