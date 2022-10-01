import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { graphql, useFragment } from 'react-relay'
import { Comment_node$key } from '../../queries/__generated__/Comment_node.graphql'

type CommentProps = {
  comment: Comment_node$key
}

const Comment = ({ comment }: CommentProps) => {
  const data = useFragment(
    graphql`
      fragment Comment_node on Comment {
        abstractContent
        contentJson
        createdBy {
          avatar
          name
          handle
        }
        id
        timeCreated
      }
    `,
    comment
  )

  dayjs.extend(relativeTime)

  return (
    <div className="flex flex-col p-j ">
      <div className="flex flex-row">
        <img
          className="w-8 h-8 rounded-full"
          src={data.createdBy.avatar}
          alt={data.createdBy.name}
        />
        <div className="ml-2 flex flex-col">
          <div className="flex flex-row text-sm">
            <span className="mr-4">{data.createdBy.handle}</span>
            <span>{`${dayjs(data.timeCreated).toNow(true)} ago`}</span>
          </div>
          <span className="text-l dark:text-gray-300">{data.contentJson}</span>
        </div>
      </div>
    </div>
  )
}

export default Comment
