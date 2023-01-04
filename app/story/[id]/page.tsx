import { headers } from 'next/headers'
import loadSerializableQuery from 'src/relay/loadSerializableQuery'
import Id_StoryQueryNode, {
  Id_StoryQuery,
} from '__generated__/Id_StoryQuery.graphql'
import Story from './Story'

export default async function StoryPage({
  params,
}: {
  params: { id: string }
}) {
  const requestCookie = headers().get('cookie')
  const preloadedQuery = await loadSerializableQuery<
    typeof Id_StoryQueryNode,
    Id_StoryQuery
  >(
    Id_StoryQueryNode.params,
    { id: (decodeURIComponent(params.id) as string) ?? '' },
    requestCookie ?? ''
  )
  return (
    <div>
      <Story preloadedQuery={preloadedQuery} cookies={requestCookie ?? ''} />
    </div>
  )
}
