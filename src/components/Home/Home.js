import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const signedOutUser = (
  <Fragment>
    <p>Sign in or Sign in to get started!</p>
    <Link to='/sign-in'><Button>Sign In</Button></Link>
    <Link to='/sign-up'><Button>Sign Up</Button></Link>
  </Fragment>
)
const signedInUser = (
  <Fragment>
    <p>Click below to see current book listings!</p>
    <Link to='/listings'><Button>Listings</Button></Link>
  </Fragment>
)
const Home = ({ user }) => (
  <div className='container'>
    <h1>Welcome to <span className='page-title'>Bookwrym!</span></h1>
    <h3>An online marketplace for your books.</h3>
    { user ? signedInUser : signedOutUser }
  </div>
)
export default Home
