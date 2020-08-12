import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>main</title>
        <meta charset="utf-8" />
      </Head>
      <AppLayout>
        <div>Hello Next</div>
      </AppLayout>
    </>
  )
}

export default Home
