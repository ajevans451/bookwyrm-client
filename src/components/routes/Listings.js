import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
    axios(`${apiUrl}/listings`)
      .then(res => (console.log(res.data)))
      .then(res => this.setState({ listings: res.data.listings }))
      .catch(console.error)
  }
  render () {
    const listings = this.state.listings.map(listing => (
      <li key={listing.id}>
        <Link to={`/listings/${listing._id}`}>{listing.title}</Link>
      </li>
    ))
    return (
      <div>
        <h2>Current Listings</h2>
        <ul>
          {listings}
        </ul>
      </div>
    )
  }
}
export default Listings
