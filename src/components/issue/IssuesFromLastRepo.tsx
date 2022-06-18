import React from 'react'
import { graphql, usePaginationFragment } from 'react-relay'
import { IssuesFromLastRepo$key } from '../../queries/__generated__/IssuesFromLastRepo.graphql'
import { IssuesFromLastRepo_Query } from '../../queries/__generated__/IssuesFromLastRepo_Query.graphql'
import { UserDetails_user$key } from '../../queries/__generated__/UserDetails_user.graphql'
import Issue from './Issue'

type IssuesFromLastRepoProps = {
  user: IssuesFromLastRepo$key
}

const IssuesFromLastRepo = ({ user }: IssuesFromLastRepoProps) => {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment IssuesFromLastRepo on User
      @refetchable(queryName: "IssuesFromLastRepo_Query")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 2 }
        cursor: { type: "String" }
      ) {
        issuesFromLastRepo(first: $count, after: $cursor)
          @connection(key: "IssuesFromLastRepo__issuesFromLastRepo") {
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

  if (!data || data.issuesFromLastRepo.edges.length === 0) {
    return <></>
  }

  return (
    <div className="mt-10">
      <h3 className="font-bold text-gray-500 text-lg">Issues from last repo</h3>
      <div className="grid grid-cols-2 xl:grid-cols-2 gap-4 mt-4">
        {data.issuesFromLastRepo.edges.map(
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

export default IssuesFromLastRepo
