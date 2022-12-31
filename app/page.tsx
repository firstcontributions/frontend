import { headers } from 'next/headers'
import loadSerializableQuery from 'src/relay/loadSerializableQuery'
import MainViewQueryNode, {
  HomeQuery,
} from '../__generated__/HomeQuery.graphql'
import HomePage from './Home'

const Page = async () => {
  // console.log('cookies', cookies())
  // const requestCookie = cookies().getAll()
  const requestCookie = headers().get('cookie')
  console.log('request cookie', headers().get('cookie'))
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
