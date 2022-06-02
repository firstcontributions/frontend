import React from "react"
import { useFragment, graphql, usePaginationFragment } from "react-relay"
import Issue from "./Issue"

const IssueList = ({user}: any) => {
    const {data, loadNext, hasNext} = usePaginationFragment(
        graphql`
        fragment IssueList on User 
        @refetchable(queryName: "IssueList_Query")
        @argumentDefinitions(
            count: {type: "Int", defaultValue: 10}
            cursor: {type: "String"}
        ){
            relevantIssues(first:$count, after: $cursor) 
            @connection(key: "IssueList__relevantIssues") {
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

    if (!data ) {
        return (<></>)
    }

    return (
        <div className="grid grid-cols-2 xl:grid-cols-3 space-x-4 space-y-4">
            {
                data.relevantIssues.edges.map((issue) => (<Issue issue={issue.node} key={issue.id}/>))
            }
            {hasNext? <button onClick={()=>{loadNext(10)}}>Load more</button>: null}
            
        </div>
    )
}

export default IssueList