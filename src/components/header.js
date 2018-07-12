import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MainNavigation = styled.nav`
  &.navbar{
    background-color: #f2f2f2;
    padding: 16px 16px;
    li{
      margin-right: 10px;
      a{
        font-family: 'Averta', "Helvetica Neue", sans-serif;
        font-weight: 600;
      }
    }
  }
`

const MainLogo = styled.img`
  width: 160px;
  height: auto;
`

const Button = styled.a`
  &.btn{
    border-radius: 100px;
    background-color: #e5376c;
    border-color: #e5376c;
    color: #fff;
    padding: 8px 16px;
    font-size: 14px;
  }
  
`

const Header = ({ siteTitle }) => (
  <MainNavigation className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <MainLogo src="https://st03.wpengine.com/wp-content/themes/sterling-stardust/assets/images/icons/Sterling-RGB-Logo-0614-160px-SVG.svg" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/page-2/">Why Sterling?</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/page-3/">Services</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <div className="ml-5">
          <Button href="#" className="btn btn-md">Get Started</Button>
        </div>
      </div>
    </div>
  </MainNavigation>
)

export default Header
