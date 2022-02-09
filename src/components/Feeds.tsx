import {pages_FeedsQuery$data} from '../queries/__generated__/pages_FeedsQuery.graphql'
import BadgeList from './BadgeList'

const Feeds = ({user})=> (
    <>
        <h1>
            {user?.handle}
        </h1>
        <BadgeList user={user} />
    </>
)

export default Feeds