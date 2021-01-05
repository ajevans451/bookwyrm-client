import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const signedOutUser = (
  <Fragment>
    <p>Sign in or Sign in to get started!</p>
    <Link to='/sign-in'>Sign In</Link>
    <Link to='/sign-up'>Sign Up</Link>
  </Fragment>
)
const signedInUser = (
  <Fragment>
    <p>Click below to see current book listings!</p>
    <Link to='/listings'>Listings</Link>
  </Fragment>
)
const Home = ({ user }) => (
  <div>
    <h1>Welcome to Bookwrym!</h1>
    <h3>An online marketplace for your books.</h3>
    { user ? signedInUser : signedOutUser }
  </div>
)
export default Home
