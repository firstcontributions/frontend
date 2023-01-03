'use client'

import { headers } from 'next/headers'
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
import issuesQueryNode, { issuesQuery } from '__generated__/issuesQuery.graphql'
import Card from 'src/components/Card'
import IssuesFromLastRepo from 'src/components/issue/IssuesFromLastRepo'
import IssuesFromRecentRepos from 'src/components/issue/IssuesFromRecentRepo'
import RelevantIssues from 'src/components/issue/RelevantIssues'

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
export default async function Story() {
  const requestCookie = headers().get('cookie')
  const environment = getCurrentEnvironment(requestCookie ?? '')
  const preloadedQuery = await loadSerializableQuery<
    typeof issuesQueryNode,
    issuesQuery
  >(issuesQueryNode.params, {}, requestCookie ?? '')
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery)
  const data = usePreloadedQuery(IssuesQuery, queryRef)
  return (
    <RelayEnvironmentProvider environment={environment as Environment}>
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
    </RelayEnvironmentProvider>
  )
}
