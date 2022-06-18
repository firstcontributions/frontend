import { graphql, useFragment } from "react-relay"
import BadgeIcon from "./BadgeIcon"
import Hexagon from "./Hexagon"

const Badge = ({badge}: any) => {
    const data = useFragment(
        graphql`
            fragment Badge_node on Badge {
                displayName
                progressPercentageToNextLevel
                currentLevel
            }
        `, badge
    )

    return (
        <>
            <h4>{data.displayName}</h4>
                <Hexagon size={60} color="red" >
                    <BadgeIcon displayName={data.displayName} />
                </Hexagon>
            {data.currentLevel}
        </>
    )
}

export default Badge
