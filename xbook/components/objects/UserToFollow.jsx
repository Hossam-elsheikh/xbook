import React from 'react'
import UserShort from './UserShort'
import FollowButton from './FollowButton'

const UserToFollow = ({user}) => {
  return (
    <div className='flex items-center justify-between gap-4'>
        <UserShort {...user} />
        <FollowButton />
    </div>
  )
}

export default UserToFollow