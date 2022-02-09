import { graphql, useFragment } from "react-relay"

const Badge = ({badge}) => {
    const data = useFragment(
        graphql`
            fragment Badge_node on Badge {
                displayName
            }
        `, badge
    )

    return (
        <>
                <h4>{data.displayName}</h4>
        </>
    )
}

export default Badge