import { useFragment, graphql, usePaginationFragment } from "react-relay"
import Badge from "./Badge"

const BadgeList = ({user}) => {
    const {data, loadNext, hasNext} = usePaginationFragment(
        graphql`
        fragment BadgeList_user on User 
        @refetchable(queryName: "BadgeList_userQuery")
        @argumentDefinitions(
            count: {type: "Int", defaultValue: 2}
            cursor: {type: "String"}
        ){
            badges(first:$count, after: $cursor) 
            @connection(key: "BadgeList__badges") {
                edges {
                    node {
                        id
                        ...Badge_node
                    }
                }
            }
        }
        `, user
    )

    if (!data || !data.badges) {
        return (<></>)
    }

    return (
        <>
            {
                data.badges.edges.map((e)=> (<Badge key={e.node.id} badge={e.node}/>))
            }
            {hasNext? <button onClick={()=>{loadNext(2)}}>Load more</button>: null}
            
        </>
    )
}

export default BadgeList