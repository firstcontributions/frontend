import React from 'react'
import { graphql, usePaginationFragment } from 'react-relay'
import { RelevantIssues$key } from '__generated__/RelevantIssues.graphql'
import Button from '../Button'
import Issue from './Issue'

type RelevantIssuesProps = {
  user: RelevantIssues$key
}

const RelevantIssues = ({ user }: RelevantIssuesProps) => {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment RelevantIssues on User
      @refetchable(queryName: "RelevantIssues_Query")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      ) {
        relevantIssues(first: $count, after: $cursor)
          @connection(key: "RelevantIssues__relevantIssues") {
          edges {
            node {
              id
              ...Issue_node
            }
          }
        }
      }
    `,
    user
  )

  if (!data) {
    return null
  }

  return (
    <div className="mt-10">
      <h3 className="font-bold text-gray-500 text-lg">Explore New Issues</h3>
      <div className="grid grid-cols-2 xl:grid-cols-2 gap-4 mt-4">
        {data.relevantIssues.edges.map(
          (issue) => issue && <Issue issue={issue.node} key={issue.node.id} />
        )}
        {hasNext ? (
          <Button
            onClick={() => {
              loadNext(10)
            }}
          >
            Load more
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default RelevantIssues
