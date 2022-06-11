import { graphql, useFragment } from "react-relay"
import CircularProgress from './CircularProgress'
import { DiAndroid } from '@react-icons/all-files/di/DiAndroid'

const Badge = ({badge}: any) => {
    const data = useFragment(
        graphql`
            fragment Badge_node on Badge {
                displayName
                progressPercentageToNextLevel
            }
        `, badge
    )

    return (
        <>
            <h4>{data.displayName}</h4>
            <DiAndroid  className="w-10 h-10 text-green-600 "/>
        </>
    )
}

export default Badge
