import ProfileCard from '../components/ProfileCard'
import { Profile } from '../lib/constants'

type ProfileListProps = {
  profiles: Profile[]
}

export default function ProfileList({ profiles }: ProfileListProps) {
  return (
    <>
      {profiles.length === 0 ? (
        <p className="opacity-half m-0 font-light">There are no public profiles created yet</p>
      ) : (
        <div className="profileList">
          {profiles?.map((profile: any) => (
            <ProfileCard profile={profile} key={profile.id} />
          ))}
        </div>
      )}
    </>
  )
}
