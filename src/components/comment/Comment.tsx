import { graphql, useFragment } from 'react-relay'
import { Comment_node$key } from '../../queries/__generated__/Comment_node.graphql'
import { UserDetails_user } from '../../queries/__generated__/UserDetails_user.graphql'
import UserSnippet from '../feed/UserSnippet'

type CommentProps = {
  comment: Comment_node$key
  storyCreator: UserDetails_user
}

const Comment = ({ comment, storyCreator }: CommentProps) => {
  const data = useFragment(
    graphql`
      fragment Comment_node on Comment {
        contentJson
        createdBy {
          id
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
        <div className="flex ">
          <UserSnippet user={data.createdBy} showAvatar={false} showBio={false}>
            {data.createdBy.id === storyCreator.__id && (
              <div className="bg-gray-200 dark:bg-dark-500 px-2 pt-1 ml-2 leading-2 rounded-md">
                OP
              </div>
            )}
          </UserSnippet>
        </div>
        {data.contentJson}
      </div>
    </div>
  )
}

export default Comment
