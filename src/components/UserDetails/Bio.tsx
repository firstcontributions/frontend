import { useState } from "react";
import { graphql, useFragment, useMutation } from "react-relay";


const Bio = ({user}) => {

    const data = useFragment(
        graphql`
            fragment Bio_user on User {
                id
                bio
            }
        `, user
    );
    
    const [bio, setBio] = useState(data.bio);

    const [commitMutation, isMutationInFlight] = useMutation(
        graphql`
          mutation BioUpdateMutation($input: UpdateUserInput!) {
            updateUser(user:$input) {
                id
                bio
            }
          }
        `
    );
    const onChange = (evt) => setBio(evt.target.textContent); 
    const onSubmit = () => {
        console.log(bio);
        commitMutation({
            variables: {
              input: {id: data.id, bio: bio},
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