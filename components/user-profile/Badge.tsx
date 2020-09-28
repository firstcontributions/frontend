import CircularProgress from "../CircularProgress";

export interface BadgeProps {
  name: string
  classes?: string
  progress: number
}

const Badge: React.SFC<BadgeProps> = ({ name, progress }) => {
  return (
    <>
      <div className="badge flex flex-col h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-1/2 sm:w-auto md:w-full items-center">
      <div className="w-6 xl:w-16">
        <CircularProgress progress={progress} />
      </div>
        <div className="badge-content h-10 w-full"></div>
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
            background: url(${`/assets/${name}.svg`});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </>
  )
}

export default Badge
