import { headers } from 'next/headers'
import Layout from 'src/components/Layout'
import PostEditor from 'src/components/story/PostEditor'

export default function Story() {
  const requestCookie = headers().get('cookie')
  return (
    <div>
      <Layout
        sidebarContentRight={<div>Promoted</div>}
        sidebarContentLeft={<div>Reactions</div>}
      >
        <PostEditor requestCookie={requestCookie} />
      </Layout>
    </div>
  )
}
