import { headers } from 'next/headers'
import loadSerializableQuery from 'src/relay/loadSerializableQuery'
import IssuesQueryNode, { IssuesQuery } from '__generated__/IssuesQuery.graphql'
import Issues from './Issues'

export default async function IssuesPage({
  params,
}: {
  params: { id: string }
}) {
  const requestCookie = headers().get('cookie')
  const preloadedQuery = await loadSerializableQuery<
    typeof IssuesQueryNode,
    IssuesQuery
  >(
    IssuesQueryNode.params,
    { id: (decodeURIComponent(params.id) as string) ?? '' },
    requestCookie ?? ''
  )
  return (
    <div>
      <Issues preloadedQuery={preloadedQuery} cookies={requestCookie ?? ''} />
    </div>
  )
}
