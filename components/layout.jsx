import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    padding: clamp(20px, 3%, 8%);
  }

  nav a {
    font-size: 48px;
  }

  .nav-top {
    top: 0
  }

  .nav-bottom {
    bottom: 0
  }

  main {
    padding: 0 clamp(20px, 3%, 8%);
    max-width: clamp(550px, 80vw, 1000px);
    margin: 0 auto;
  }

  @media screen and (max-width: 700px) {
    nav {
      position: sticky;
      z-index: 0;
      background: #fff;
    }

    .nav-top a {
      padding-bottom: 5px;
    }
  
    .nav-bottom a {
      padding-top: 5px;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <Container>
      <nav className='nav-top'>
        <Link href='/'><a className='ft-primary'>logo</a></Link>
        <Link href='/work'><a className='ft-primary'>works</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <nav className='nav-bottom'>
        <Link href='/blog'><a className='ft-primary'>blog</a></Link>
        <Link href='/contact'><a className='ft-primary'>contact</a></Link>
      </nav>
    </Container>
  )
}

export default Layout