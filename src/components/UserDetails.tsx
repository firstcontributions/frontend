import BadgeList from './BadgeList'

const UserDetails = ({user})=> (
    <>
        <h1>
            {user?.handle}
        </h1>
        <BadgeList user={user} />
    </>
)

export default UserDetails