import { graphql, usePaginationFragment } from 'react-relay'
import NewComment from './NewComment'
import Comment from './Comment'
import { Comments_story$key } from '../../queries/__generated__/Comments_story.graphql'

type CommentsProps = {
  story: Comments_story$key
}

const Comments = ({ story }: CommentsProps) => {
  const { data, loadNext, hasNext, refetch } = usePaginationFragment(
    graphql`
      fragment Comments_story on Story
      @refetchable(queryName: "Comments_storyQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      ) {
        id
        createdBy {
          id
        }
        comments(
          first: $count
          after: $cursor
          sortBy: "time_created"
          sortOrder: desc
        ) @connection(key: "Comments_story__comments") {
          edges {
            node {
              id
              ...Comment_node
            }
          }
          totalCount
        }
      }
    `,
    story
  )

  if (!data || !data.comments) {
    return <></>
  }

  return (
    <div className="space-y-4 mt-8">
      <h3>{data.comments.totalCount} comments</h3>
      <NewComment storyId={data.id} refetch={refetch} />
      {data.comments.edges.map(
        (comment) =>
          comment?.node && (
            <Comment
              comment={comment?.node}
              key={comment?.node.id}
              storyCreatorId={data.createdBy.id}
            />
          )
      )}
      {hasNext ? (
        <button
          className="text-gray-600 dark:text-gray-300"
          onClick={() => {
            loadNext(2)
          }}
        >
          Load more
        </button>
      ) : null}
    </div>
  )
}

export default Comments
