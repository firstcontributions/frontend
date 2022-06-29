import { graphql, useFragment } from 'react-relay'
import { StoryPreview_node$key } from '../../queries/__generated__/StoryPreview_node.graphql'
import Card from '../Card'
import StoryAbstract from './StoryAbstract'
import StoryPreviewFooter from './StoryPreviewFooter'
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
    <Card classes="my-8 flex flex-col">
      <UserSnippet user={data.createdBy} />
      <div className="prose dark:text-gray-100">
        <h3 className="dark:text-gray-200">{data.title}</h3>
        <p>{data.abstractContent}</p>
      </div>
      <StoryAbstract abstract={data.abstractContent} />
      <StoryPreviewFooter />
    </Card>
  )
}

export default StoryPreview
