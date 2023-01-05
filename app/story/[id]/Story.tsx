'use client'

import dynamic from 'next/dynamic'
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
import Comments from 'src/components/comment/Comments'
import Layout from 'src/components/Layout'
import UserDetails from 'src/components/UserDetails/UserDetails'
import StoryQueryNode, { StoryQuery } from '__generated__/StoryQuery.graphql'
import { Suspense } from 'react'

const Editor = dynamic(() => import('src/components/story/StoryEditor'), {
  ssr: false,
})

const StoryQuery = graphql`
  query StoryQuery($id: ID!) {
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
type StoryProps = {
  preloadedQuery: SerializablePreloadedQuery<typeof StoryQueryNode, StoryQuery>
  cookies: string
}

export default function StoryContainer({
  preloadedQuery,
  cookies,
}: StoryProps) {
  const environment = getCurrentEnvironment(cookies)
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery)
  return (
    <RelayEnvironmentProvider environment={environment as Environment}>
      <Suspense fallback="Loading...">
        <Story queryRef={queryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

const Story = (props: { queryRef: PreloadedQuery<StoryQuery> }) => {
  const data = usePreloadedQuery(StoryQuery, props.queryRef)
  return (
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
  )
}
