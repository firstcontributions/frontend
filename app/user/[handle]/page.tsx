import { headers } from 'next/headers'
import loadSerializableQuery from 'src/relay/loadSerializableQuery'
import UserPageQueryNode, {
  UserPageQuery,
} from '__generated__/UserPageQuery.graphql'
import User from './UserPage'

export default async function StoryPage({
  params,
}: {
  params: { handle: string }
}) {
  const requestCookie = headers().get('cookie')
  const preloadedQuery = await loadSerializableQuery<
    typeof UserPageQueryNode,
    UserPageQuery
  >(
    UserPageQueryNode.params,
    { handle: (decodeURIComponent(params.handle) as string) ?? '' },
    requestCookie ?? ''
  )
  return (
    <div>
      <User preloadedQuery={preloadedQuery} cookies={requestCookie ?? ''} />
    </div>
  )
}
