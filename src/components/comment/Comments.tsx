import { graphql, usePaginationFragment } from 'react-relay'
import NewComment from './NewComment'
import Comment from './Comment'

type CommentsProps = {
  story: any
}

const Comments = ({ story }: CommentsProps) => {
  const { data, loadNext, hasNext, refetch } = usePaginationFragment(
    graphql`
      fragment Comments_story on Story
      @refetchable(queryName: "Comments_storyQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 20 }
        cursor: { type: "String" }
      ) {
        comments(first: $count, after: $cursor)
          @connection(key: "Comments_story__comments") {
          edges {
            node {
              id
              ...Comment_node
            }
          }
        }
      }
    `,
    story
  )

  if (!data || !data.comments) {
    return <></>
  }

  return (
    <div className="space-y-4 mt-4">
      <NewComment storyId={story.id} refetch={refetch} />
      {data.comments.edges.map(
        (comment: any) =>
          comment && <Comment comment={comment.node} key={comment.node.id} />
      )}
      {hasNext ? (
        <button
          type="button"
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
