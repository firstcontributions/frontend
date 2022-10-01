import { useState } from 'react'
import { graphql, RefetchFnDynamic, useMutation } from 'react-relay'
import { Options } from 'react-relay/relay-hooks/useRefetchableFragmentNode'
import { OperationType } from 'relay-runtime'
import Button from '../Button'
import ExpandingTextarea from '../ExpandingTextarea'

type NewCommentProps = {
  storyId: string
  refetch: RefetchFnDynamic<OperationType, never, Options>
}

export default function NewComment({ storyId, refetch }: NewCommentProps) {
  const [comment, setComment] = useState('')

  const [commitMutation, isMutationInFlight] = useMutation(
    graphql`
      mutation NewCommentMutation($input: CommentInput!) {
        createComment(comment: $input) {
          id
        }
      }
    `
  )

  const handleCommentPost = () => {
    commitMutation({
      variables: {
        input: { storyID: storyId, contentJson: comment, abstractContent: '' },
      },
      onCompleted: () => {
        refetch({}, { fetchPolicy: 'network-only' })
        setComment('')
      },
    })
  }

  return (
    <div className="w-full dark:text-gray-300 dark:bg-dark-600 flex flex-col items-end rounded-md">
      <div className="textarea-container w-full p-4">
        <ExpandingTextarea
          value={comment}
          setValue={setComment}
          disabled={isMutationInFlight}
          placeholder="Write a comment..."
          className="w-full dark:text-gray-300 dark:bg-dark-600 focus-visible:outline-none"
        />
      </div>
      <Button onClick={() => handleCommentPost()}>Post</Button>
    </div>
  )
}
