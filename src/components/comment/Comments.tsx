import { graphql, usePaginationFragment } from 'react-relay'
import NewComment from './NewComment'

const Comments = ({ story }: any) => {
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
              contentJson
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
    <div className="space-y-4">
      {data.comments.edges.map((comment: any) => (
        <div key={comment.id}>{comment.node.contentJson}</div>
      ))}
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
      <NewComment storyId={story.id} refetch={refetch} />
    </div>
  )
}

export default Comments
