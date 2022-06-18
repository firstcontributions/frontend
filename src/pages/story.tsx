import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const Editor = dynamic(() => import('../components/story/StoryEditor'))
export default function Story () {
    return (
        <div>
            <Layout  sidebarContentRight={<div>Promoted</div>} sidebarContentLeft={<div/>}>
                <Editor />
            </Layout>
        </div>
    )
}