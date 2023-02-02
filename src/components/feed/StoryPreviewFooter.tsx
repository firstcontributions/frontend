import { RiHeart3Fill } from '@react-icons/all-files/ri/RiHeart3Fill'
import { RiHeartLine } from '@react-icons/all-files/ri/RiHeartLine'
import { graphql, useMutation, useRefetchableFragment } from 'react-relay'
import { StoryPreviewFooter_story$key } from '__generated__/StoryPreviewFooter_story.graphql'

type StoryPreviewFooterProps = {
  story: StoryPreviewFooter_story$key
}

export default function StoryPreviewFooter({ story }: StoryPreviewFooterProps) {
  const [data, refetch] = useRefetchableFragment(
    graphql`
      fragment StoryPreviewFooter_story on Story
      @refetchable(queryName: "StoryPreviewFooterRefetchQuery") {
        id
        reactions(first: 1) {
          totalCount
          hasViewerAssociation
        }
        comments(first: 1) {
          totalCount
        }
      }
    `,
    story
  )

  const [commitMutation, isMutationInFlight] = useMutation(
    graphql`
      mutation StoryPreviewFooterReactionMutation($input: ReactionInput!) {
        createReaction(reaction: $input) {
          id
        }
      }
    `
  )

  const handleReaction = () => {
    commitMutation({
      variables: {
        input: { storyID: data.id },
      },
      onCompleted: () => {
        refetch({}, { fetchPolicy: 'network-only' })
      },
    })
  }
  return (
    <div className="flex flex-row items-center bg-gray-100 dark:bg-dark-500 p-4 rounded-b-lg space-x-4">
      <div>
        <span className="text-sm"> {data.comments.totalCount} </span>
        <span className="text-sm">comments </span>
      </div>
      <div className="">
        {data.reactions.hasViewerAssociation ? (
          <div className="flex items-center">
            <span>{data.reactions.totalCount}</span>
            <button onClick={() => handleReaction()} type="button">
              <RiHeart3Fill />
            </button>
          </div>
        ) : (
          <div>
            <span>{data.reactions.totalCount}</span>
            <button
              type="button"
              onClick={() => handleReaction()}
              disabled={isMutationInFlight}
            >
              <RiHeartLine />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
