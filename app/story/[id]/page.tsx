import { headers } from 'next/headers'
import loadSerializableQuery from 'src/relay/loadSerializableQuery'
import StoryQueryNode, { StoryQuery } from '__generated__/StoryQuery.graphql'
import Story from './Story'

export default async function StoryPage({
  params,
}: {
  params: { id: string }
}) {
  const requestCookie = headers().get('cookie')
  const preloadedQuery = await loadSerializableQuery<
    typeof StoryQueryNode,
    StoryQuery
  >(
    StoryQueryNode.params,
    { id: (decodeURIComponent(params.id) as string) ?? '' },
    requestCookie ?? ''
  )
  return (
    <div>
      <Story preloadedQuery={preloadedQuery} cookies={requestCookie ?? ''} />
    </div>
  )
}
