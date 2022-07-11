import { graphql, useFragment } from 'react-relay'
import { Comment_node$key } from '../../queries/__generated__/Comment_node.graphql'
import UserSnippet from '../feed/UserSnippet'

type CommentProps = {
  comment: Comment_node$key
}

const Comment = ({ comment }: CommentProps) => {
  const data = useFragment(
    graphql`
      fragment Comment_node on Comment {
        contentJson
        createdBy {
          avatar
          handle
          ...UserSnippet_user
        }
      }
    `,
    comment
  )

  return (
    <div className="flex">
      <img
        src={data.createdBy.avatar}
        alt={`${data.createdBy.handle}'s avatar`}
        className="w-10 h-10 rounded-full mr-2 border-4 dark:border-dark-700"
      />
      <div className="flex flex-col">
        <UserSnippet user={data.createdBy} showAvatar={false} showBio={false} />
        {data.contentJson}
      </div>
    </div>
  )
}

export default Comment
