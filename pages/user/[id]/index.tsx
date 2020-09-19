import { useRouter } from 'next/router'
import OverallBadge from '../../../components/user-profile/OverallBadge'
import Badge from '../../../components/user-profile/Badge'
import { profile } from '../../../cypress/fixtures/profile.json'

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
          <OverallBadge level={profile.overallBadge.level} />
        </div>
        <div className="flex row">
          {profile.badges.map((badge) => (
            <Badge name={badge.name} key={badge.name} />
          ))}
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
