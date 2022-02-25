import { graphql, useFragment } from "react-relay"
import CircularProgress from './CircularProgress'

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
            <>
            <div className={`w-20 badge flex flex-col items-center`}>
                <div className="w-6 h-6 ">
                    <CircularProgress progress={100 + data.progressPercentageToNextLevel} />
                </div>
                <div className="badge-content h-10 w-full p-2"></div>
            </div>
            <style jsx>
                {`
                .badge {
                    background: url('/assets/badge.svg');
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .badge-content {
                    background: url(${`/assets/${data.displayName}.svg`});
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                `}
            </style>
            </>
        </>
    )
}

export default Badge
