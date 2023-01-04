'use client'

import { useState } from 'react'
import { GoPencil } from '@react-icons/all-files/go/GoPencil'
import { GoCheck } from '@react-icons/all-files/go/GoCheck'
import { graphql, useFragment, useMutation } from 'react-relay'
import { Bio_user$key } from '__generated__/Bio_user.graphql'

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
  const [editMode, setEditMode] = useState(false)

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
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setBio(evt.target.value)
  const onSubmit = () => {
    setEditMode(false)
    commitMutation({
      variables: {
        input: { id: data.id, bio: bio },
      },
    })
  }

  return (
    <div>
      {editMode ? (
        <div className="flex justify-between">
          <input
            onChange={onChange}
            onBlur={onSubmit}
            className="dark:text-gray-300 dark:bg-dark-600"
            type="text"
            disabled={isMutationInFlight}
            defaultValue={data.bio}
          />
          <button onClick={() => setEditMode(false)}>
            <GoCheck />
          </button>
        </div>
      ) : (
        <div className="flex justify-between">
          <span>{data.bio}</span>
          <button className="ml-4" onClick={() => setEditMode(true)}>
            <GoPencil />
          </button>
        </div>
      )}
    </div>
  )
}

export default Bio
