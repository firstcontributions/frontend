import { useFragment, useRefetchableFragment } from "react-relay"

const Repository = ({repo}) => {
    const data = useFragment(
        graphql`
            fragment Repository_repo on Repository{
                id
                nameWithOwner
                url
            }
        `, repo
    )

    return (
        <>
            <a href={data.url}>
                <h4>{data.nameWithOwner}</h4>
            </a>
            <hr/>
        </>
    )
}

export default Repository