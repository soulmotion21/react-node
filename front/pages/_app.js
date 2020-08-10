// 공통되는 것들 처리
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import 'antd/dist/antd.css'

const NodeBird = ({ Component }) => {
  return(
    <>
      <Head>
        <title>app</title>
        <meta charset="utf-8"/>
      </Head>
      <Component />
    </>
  )
}

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default NodeBird
