import React, { useState, useCallback } from 'react'
import Head from 'next/head'
import { Form, Input, Checkbox, Button } from 'antd'
import useInput from '../hooks/useInput'
import styled from 'styled-components'
import AppLayout from '../components/AppLayout'

const ErrorMessage = styled.div`
  color: red
`

const Signup = () => {
  const [id, onChangeId] = useInput('')
  const [nickname, onChangeNickname] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value)
    setPasswordError(e.target.value !== password)
  }, [password])

  const [term, setTerm] = useState('')
  const [termError, setTermError] = useState(false)
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked)
    setTermError(false)
  }, [])

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    if (!term) {
      return setTermError(true)
    }
    console.log(id, nickname, password)
  }, [password.passwordCheck, term])

  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">ID</label>
            <Input name="user-id" value={id} required onChange={onChangeId}/>
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <Input name="user-nick" value={nickname} required onChange={onChangeNickname}/>
          </div>
          <div>
            <label htmlFor="user-password">패스워드</label>
            <Input name="user-password" value={password} required
                   onChange={onChangePassword}/>
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않음</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="user-password-check">패스워드확인</label>
            <Input name="user-password-check" value={passwordCheck} required
                   onChange={onChangePasswordCheck}/>
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않음</ErrorMessage>}
          </div>
          <div>
            <Checkbox name="_user-term" checked={term} onChange={onChangeTerm}>동의</Checkbox>
            {termError && <ErrorMessage>동의필수!</ErrorMessage>}
          </div>
          <div>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  )
}

export default Signup
