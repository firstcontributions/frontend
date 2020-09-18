export interface OverallBadgeProps {
  level: number
}

const OverallBadge: React.SFC<OverallBadgeProps> = ({ level }) => {
  return (
    <>
      <div className="badge flex justify-center items-center">
        <div className="badge-content"></div>
      </div>

      <style jsx>{`
        .badge {
          background: url('/assets/overall-badge.svg');
          background-repeat: no-repeat;
          background-size: contain;
          width: 225px;
          height: 256px;
        }
        .badge-content {
          background: url(${`/assets/level-${level}.svg`});
          background-repeat: no-repeat;
          background-size: contain;
          width: 128px;
          height: 128px;
        }
      `}</style>
    </>
  )
}

export default OverallBadge
