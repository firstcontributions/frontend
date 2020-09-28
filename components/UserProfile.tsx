import { profile } from '../cypress/fixtures/profile.json'
import OverallBadge from './user-profile/OverallBadge'
import Badge from './user-profile/Badge'

export interface UserProfileProps {

}

const UserProfile: React.SFC<UserProfileProps> = () => {
  return (

    <>
      <div className="avatar"></div>

      <OverallBadge classes="w-32 md:w-32 h-32" level={profile.overallBadge.level} />
      <div className="flex flex-wrap">
        {profile.badges.map((badge) => (
          <Badge classes="m-1" name={badge.name} key={badge.name} progress={badge.progressToNextBadge} />
        ))}
      </div>
      <style jsx>{`
        .avatar {
          background: url(${profile.avatar});
          background-repeat: no-repeat;
          background-size: contain;
          width: 128px;
          height: 128px;
        }
      `}</style>
    </>
  );
}

export default UserProfile;;