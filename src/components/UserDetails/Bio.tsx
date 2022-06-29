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
  const onChange = (evt: any) => setBio(evt.target.value)
  const onSubmit = () => {
    commitMutation({
      variables: {
        input: { id: data.id, bio: bio },
      },
    })
  }

  return (
    <input
      onChange={onChange}
      onBlur={onSubmit}
      className="dark:text-gray-300"
      type="text"
      defaultValue={data.bio}
    />
  )
}

export default Bio
