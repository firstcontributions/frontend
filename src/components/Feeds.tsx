import {pages_FeedsQuery$data} from '../queries/__generated__/pages_FeedsQuery.graphql'
import RepositoryList from './RepositoryList'
const Feeds = ({user})=> (
    <>
        <h1>
            {user?.login}
        </h1>
        <RepositoryList user={user} />
    </>
)

export default Feeds