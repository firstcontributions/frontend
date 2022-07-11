import { graphql, usePaginationFragment } from 'react-relay'
import NewComment from './NewComment'
import Comment from './Comment'
import { Comments_story$key } from '../../queries/__generated__/Comments_story.graphql'
import { UserSnippet_user$data } from '../../queries/__generated__/UserSnippet_user.graphql'

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
    <div className="space-y-4 mt-8">
      {data.comments.edges.map(
        (comment) =>
          comment?.node && (
            <Comment
              comment={comment?.node}
              key={comment?.node.id}
              storyCreator={story.createdBy}
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
      <NewComment storyId={story.id} refetch={refetch} />
    </div>
  )
}

export default Comments
