import { graphql, useFragment } from 'react-relay'
import { StoryPreview_node$key } from '../../queries/__generated__/StoryPreview_node.graphql'
import Card from '../Card'
import UserSnippet from './UserSnippet'

type StoryPreviewProps = {
  story: StoryPreview_node$key
}

const StoryPreview = ({ story }: StoryPreviewProps) => {
  const data = useFragment(
    graphql`
      fragment StoryPreview_node on Story {
        id
        abstractContent
        thumbnail
        timeCreated
        title
        createdBy {
          ...UserSnippet_user
        }
      }
    `,
    story
  )

  return (
    <>
      <Card classes="my-8">
        <UserSnippet user={data.createdBy} />
        <div className="prose">
          <h3>{data.title}</h3>
          <p>{data.abstractContent}</p>
        </div>
      </Card>
    </>
  )
}

export default StoryPreview
