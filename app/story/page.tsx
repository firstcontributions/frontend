import { headers } from 'next/headers'
import dynamic from 'next/dynamic'
import Layout from 'src/components/Layout'
import PostEditor from 'src/components/story/PostEditor'

const Editor = dynamic(() => import('src/components/story/StoryEditor'), {
  ssr: false,
})

export default function Story() {
  const requestCookie = headers().get('cookie')
  return (
    <div>
      <Layout
        sidebarContentRight={<div>Promoted</div>}
        sidebarContentLeft={<div>Reactions</div>}
      >
        <PostEditor />
      </Layout>
    </div>
  )
}
