import React from 'react'
import Head from 'next/head'

import Rocketseat from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'


const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage standard</title>
      </Head>

          <Rocketseat/>
        <h1>React Structure</h1>
        <p>A ReactJS + Next.js structure.</p>
    </Container>
  )
}

export default Home
