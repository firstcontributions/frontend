import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const Editor = dynamic(() => import('../components/editor/Editor'))
export default function Story () {
    return (
        <div>
            <Layout  sidebarContentRight={<div>Promoted</div>}>
                <Editor />
            </Layout>
        </div>
    )
}