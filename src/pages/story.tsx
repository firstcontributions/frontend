import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

const Editor = dynamic(() => import('../components/story/StoryEditor'), {
  ssr: false,
})
export default function Story() {
  const router = useRouter()
  const { title, body } = router.query
  return (
    <div>
      <Layout
        sidebarContentRight={<div>Promoted</div>}
        sidebarContentLeft={<div>Reactions</div>}
      >
        <Editor title={title as string} body={body as string} />
      </Layout>
    </div>
  )
}
