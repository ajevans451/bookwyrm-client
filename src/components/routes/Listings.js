import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class Listings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listings: []
    }
  }
  componentDidMount () {
    // get listing index data
  }
  render () {
    const listings = this.state.listings.map(listing => (
      <div key={listing.id}>
        <Link to={`/listings/${listing._id}`}>{listing.title}</Link>
      </div>
    ))
    return (
      
    )
  }
}
