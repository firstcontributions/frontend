import { useFragment, graphql, usePaginationFragment } from "react-relay"
import Repository from "./Repository"

const RepositoryList =({user}) => {
    const {data, loadNext, hasNext} = usePaginationFragment(
        graphql`
        fragment RepositoryList_user on User 
        @refetchable(queryName: "RepositoryList_userQuery")
        @argumentDefinitions(
            count: {type: "Int", defaultValue: 10}
            cursor: {type: "String"}
        ){
            repositories(first:$count, after: $cursor) 
            @connection(key: "RepositoryList__repositories") {
                edges {
                    node {
                        id
                        ...Repository_repo
                    }
                }
            }
        }
        `, user
    )

    if (!data || !data.repositories) {
        return (<></>)
    }

    return (
        <>
            {
                data.repositories.edges.map((e)=> (<Repository key={e.node.id} repo={e.node}/>))
            }
            {hasNext? <button onClick={()=>{loadNext(10)}}>Load more</button>: null}
            
        </>
    )
}

export default RepositoryList