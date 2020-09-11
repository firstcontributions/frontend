import { useRouter } from 'next/router'

const UserProfile = () => {
  const router = useRouter()
  const { id } = router.query
  const theme = { backgroundColor: '#E3E3E3' }

  return (
    <div className="user-profile">
      <aside>
        User: {id}
        <div className="avatar">Avatar</div>
      </aside>
      <main>
        <div className="row">
          <div className="overall-badge"></div>
        </div>
        <div className="flex row">
        <div className="badge flex h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-1/2 sm:w-auto md:w-full items-center">
          <div className="react h-12 w-full"></div>
        </div>
        <div className="badge flex h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-1/2 sm:w-auto md:w-full items-center">
          <div className="go h-12 w-full"></div>
        </div>
        <div className="badge flex h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-1/2 sm:w-auto md:w-full items-center">
          <div className="docker h-12 w-full"></div>
        </div>
        </div>
        <div className="row"></div>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          width: 70vw;
          margin: 1rem;
        }
        .user-profile {
          display: flex;
        }
        .overall-badge {
          background: url("/assets/overall-badge.svg");
          background-repeat: no-repeat;
          background-size: contain;
          width: 256px;
          height: 256px;
        }
        .badge {
          background: url("/assets/badge.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        .react {
          background: url("/assets/react.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        .go {
          background: url("/assets/go.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        .docker {
          background: url("/assets/docker.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        .row {
          margin: 1rem;
          padding: 1rem;
          background-color: ${theme.backgroundColor};
        }
      `}</style>
    </div>
  )
}

export default UserProfile
