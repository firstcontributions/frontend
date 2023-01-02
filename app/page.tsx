import { headers } from 'next/headers'
import loadSerializableQuery from 'src/relay/loadSerializableQuery'
import MainViewQueryNode, { HomeQuery } from '__generated__/HomeQuery.graphql'
import HomePage from './Home'

const Page = async () => {
  const requestCookie = headers().get('cookie')
  const preloadedQuery = await loadSerializableQuery<
    typeof MainViewQueryNode,
    HomeQuery
  >(MainViewQueryNode.params, {}, requestCookie ?? '')

  return (
    <div>
      <HomePage preloadedQuery={preloadedQuery} cookies={requestCookie ?? ''} />
    </div>
  )
}

export default Page

export const revalidate = 0
