import { useState } from 'react'
import { graphql, useFragment, useMutation } from 'react-relay'
import { Bio_user$key } from '../../queries/__generated__/Bio_user.graphql'

type BioProps = {
  user: Bio_user$key
}

const Bio = ({ user }: BioProps) => {
  const data = useFragment(
    graphql`
      fragment Bio_user on User {
        id
        bio
      }
    `,
    user
  )

  const [bio, setBio] = useState(data.bio)

  const [commitMutation, isMutationInFlight] = useMutation(
    graphql`
      mutation BioUpdateMutation($input: UpdateUserInput!) {
        updateUser(user: $input) {
          id
          bio
        }
      }
    `
  )
  const onChange = (evt: any) => setBio(evt.target.textContent)
  const onSubmit = () => {
    commitMutation({
      variables: {
        input: { id: data.id, bio: bio },
      },
    })
  }

  return (
    <p contentEditable={true} onInput={onChange} onBlur={onSubmit}>
      {data.bio}
    </p>
  )
}

export default Bio
