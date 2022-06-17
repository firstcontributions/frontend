import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const Editor = dynamic(() => import('../components/editor/StoryEditor'))
export default function Story () {
    return (
        <div>
            <Layout  sidebarContentRight={<div>Promoted</div>} sidebarContentLeft={<div/>}>
                <Editor />
            </Layout>
        </div>
    )
}