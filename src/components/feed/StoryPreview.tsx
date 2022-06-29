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
    <div className="my-8 flex flex-col bg-white  dark:bg-dark-700 rounded-lg">
      <div>
        <img className="cover-image" src={data.thumbnail} alt="" />
      </div>
      <div className="px-4 pb-4">
        <UserSnippet user={data.createdBy} />
        <div className="prose dark:text-gray-100">
          <h3 className="dark:text-gray-200">{data.title}</h3>
          <p>{data.abstractContent}</p>
        </div>
        <StoryPreviewFooter />
      </div>
      <style jsx>
        {`
          .cover-image {
            border-radius: 0.5rem 0.5rem 0 0;
            max-height: 10rem;
            width: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </div>
  )
}

export default StoryPreview
