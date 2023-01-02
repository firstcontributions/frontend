'use client'

import dynamic from 'next/dynamic'
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
import Comments from 'src/components/comment/Comments'
import Layout from 'src/components/Layout'
import UserDetails from 'src/components/UserDetails/UserDetails'
import Id_StoryQueryNode, {
  Id_StoryQuery,
} from '__generated__/Id_StoryQuery.graphql'

const Editor = dynamic(() => import('src/components/story/StoryEditor'), {
  ssr: false,
})

const StoryQuery = graphql`
  query Id_StoryQuery($id: ID!) {
    node(id: $id) {
      ... on Story {
        id
        contentJson
        createdBy {
          ...UserDetails_user
        }
        ...Comments_story
      }
    }
  }
`
export default async function Story() {
  const requestCookie = headers().get('cookie')
  const environment = getCurrentEnvironment(requestCookie ?? '')
  const router = useRouter()
  const { id } = router.query
  const preloadedQuery = await loadSerializableQuery<
    typeof Id_StoryQueryNode,
    Id_StoryQuery
  >(Id_StoryQueryNode.params, { id: (id as string) ?? '' }, requestCookie ?? '')
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery)
  const data = usePreloadedQuery(StoryQuery, queryRef)
  return (
    <RelayEnvironmentProvider environment={environment as Environment}>
      <div>
        <Layout
          sidebarContentRight={<div>Promoted</div>}
          sidebarContentLeft={
            <div>
              {data.node?.createdBy && (
                <UserDetails user={data?.node?.createdBy} />
              )}
            </div>
          }
        >
          <Editor body={data?.node?.contentJson} editable={false} />
          <Comments story={data.node} />
        </Layout>
      </div>
    </RelayEnvironmentProvider>
  )
}
