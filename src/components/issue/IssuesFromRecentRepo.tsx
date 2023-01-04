import React from 'react'
import { graphql, usePaginationFragment } from 'react-relay'
import { IssuesFromRecentRepos$key } from '__generated__/IssuesFromRecentRepos.graphql'
import Issue from './Issue'

type IssuesFromRecentReposProps = {
  user: IssuesFromRecentRepos$key
}

const IssuesFromRecentRepos = ({ user }: IssuesFromRecentReposProps) => {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment IssuesFromRecentRepos on User
      @refetchable(queryName: "IssuesFromRecentRepos_Query")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 2 }
        cursor: { type: "String" }
      ) {
        issuesFromOtherRecentRepos(first: $count, after: $cursor)
          @connection(
            key: "IssuesFromRecentRepos__issuesFromOtherRecentRepos"
          ) {
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

  if (!data || data.issuesFromOtherRecentRepos.edges.length === 0) {
    return <></>
  }

  return (
    <div className="mt-10">
      <h3 className="font-bold text-gray-500 text-lg">
        Issues from other recent repos
      </h3>
      <div className="grid grid-cols-2 xl:grid-cols-2 gap-4 mt-4">
        {data.issuesFromOtherRecentRepos.edges.map(
          (issue) => issue && <Issue issue={issue.node} key={issue.node.id} />
        )}
        {hasNext ? (
          <button
            onClick={() => {
              loadNext(3)
            }}
          >
            Load more
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default IssuesFromRecentRepos
