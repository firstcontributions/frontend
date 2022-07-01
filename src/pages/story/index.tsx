import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const Editor = dynamic(() => import('../../components/story/StoryEditor'), {
  ssr: false,
})

export default function Story() {
  const router = useRouter()
  return (
    <div>
      <Layout
        sidebarContentRight={<div>Promoted</div>}
        sidebarContentLeft={<div>Reactions</div>}
      >
        <Editor editable={true} />
      </Layout>
    </div>
  )
}
