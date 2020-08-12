import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'

import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'

const Profile = () => {
  const followingList = [{ nickname: 'kim' }, { nickname: 'babo' }, { nickname: 'node' }]
  const followerList = [{ nickname: 'kim' }, { nickname: 'babo' }, { nickname: 'node' }]

  return (
    <>
      <Head>
        <title>프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="following list" data={followingList} />
        <FollowList header="follower list" data={followerList} />
      </AppLayout>
    </>
  )
}

export default Profile
