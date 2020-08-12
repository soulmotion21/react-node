import React, { useCallback } from 'react'
import { Card, Avatar, Button } from 'antd'
import PropTypes from 'prop-types'
import AppLayout from './AppLayout'

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false)
  }, [])
  return (
    <Card
      actions={[
        <div key="twit">aaa</div>,
        <div key="followings"></div>,
        <div key="follow"></div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>ZC</Avatar>}
        title="kim"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  )
}

UserProfile.propTypes = {
  children: PropTypes.node.isRequired
}

export default UserProfile
