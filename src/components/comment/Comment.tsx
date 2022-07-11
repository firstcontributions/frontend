import { graphql, useFragment } from 'react-relay'
import { Comment_node$key } from '../../queries/__generated__/Comment_node.graphql'
import UserSnippet from '../feed/UserSnippet'

type CommentProps = {
  comment: Comment_node$key
  storyCreatorId: string
}

const Comment = ({ comment, storyCreatorId }: CommentProps) => {
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
      <div className="relative">
        <img
          src={data.createdBy.avatar}
          alt={`${data.createdBy.handle}'s avatar`}
          className="w-10 h-10 rounded-full mr-2 border-2 border-gray-600 dark:border-gray-200"
        />
        {data.createdBy.id === storyCreatorId && (
          <div className=" absolute top-0 right-0 bg-gray-600 dark:bg-gray-300 text-white dark:text-black font-bold px-1 pt-1 text-xs rounded-md">
            OP
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex ">
          <UserSnippet
            user={data.createdBy}
            showAvatar={false}
            showBio={false}
          ></UserSnippet>
        </div>
        {data.contentJson}
      </div>
    </div>
  )
}

export default Comment
