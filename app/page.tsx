import { headers } from 'next/headers'
import Layout from 'src/components/Layout'
import Login from 'src/components/Login'
import loadSerializableQuery from 'src/relay/loadSerializableQuery'
import MainViewQueryNode, { HomeQuery } from '__generated__/HomeQuery.graphql'
import HomePage from './Home'

const Page = async () => {
  const requestCookie = headers().get('cookie')
  try {
    const preloadedQuery = await loadSerializableQuery<
      typeof MainViewQueryNode,
      HomeQuery
    >(MainViewQueryNode.params, {}, requestCookie ?? '')

    return (
      <div>
        <HomePage
          preloadedQuery={preloadedQuery}
          cookies={requestCookie ?? ''}
        />
      </div>
    )
  } catch (e) {
    if ((e as Error)?.message.includes('Unauthorized')) {
      return <Layout sidebarContentLeft={<Login />}>Feed goes here.</Layout>
    }
  }

  return null
}

export default Page

export const revalidate = 0
