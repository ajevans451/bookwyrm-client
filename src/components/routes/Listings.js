import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { listingIndex } from '../../api/listing'

class Listings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listings: []
    }
  }
  componentDidMount () {
    const { user } = this.props
    listingIndex(this.state, user)
      // .then(res => (console.log(res.data.listings)))
      .then(res => this.setState({ listings: res.data.listings }))
      .then(console.log(this.state.listings))
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
