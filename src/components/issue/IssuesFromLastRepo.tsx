import React from "react"
import { graphql, usePaginationFragment } from "react-relay"
import Issue from "./Issue"

const IssuesFromLastRepo = ({user}: any) => {
    const {data, loadNext, hasNext} = usePaginationFragment(
        graphql`
        fragment IssuesFromLastRepo on User 
        @refetchable(queryName: "IssuesFromLastRepo_Query")
        @argumentDefinitions(
            count: {type: "Int", defaultValue: 2}
            cursor: {type: "String"}
        ){
            issuesFromLastRepo(first:$count, after: $cursor) 
            @connection(key: "IssuesFromLastRepo__issuesFromLastRepo") {
                edges {
                    node {
                        id
                        ...Issue_node
                    }
                }
            }
        }
        `, user
    )

    if (!data || data.issuesFromLastRepo.edges.length === 0 ) {
        return (<></>)
    }

    return (
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
            {
                data.issuesFromLastRepo.edges.map((issue) => (<Issue issue={issue.node} key={issue.id}/>))
            }
            {hasNext? <button onClick={()=>{loadNext(3)}}>Load more</button>: null}
            
        </div>
    )
}

export default IssuesFromLastRepo