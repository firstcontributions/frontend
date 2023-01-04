import { headers } from 'next/headers'
import loadSerializableQuery from 'src/relay/loadSerializableQuery'
import issuesQueryNode, { issuesQuery } from '__generated__/issuesQuery.graphql'
import Issues from './Issues'

export default async function IssuesPage({
  params,
}: {
  params: { id: string }
}) {
  const requestCookie = headers().get('cookie')
  const preloadedQuery = await loadSerializableQuery<
    typeof issuesQueryNode,
    issuesQuery
  >(
    issuesQueryNode.params,
    { id: (decodeURIComponent(params.id) as string) ?? '' },
    requestCookie ?? ''
  )
  return (
    <div>
      <Issues preloadedQuery={preloadedQuery} cookies={requestCookie ?? ''} />
    </div>
  )
}
