import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { listingIndex } from '../../api/listing'
import Button from 'react-bootstrap/Button'

class Listings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listings: []
    }
  }
  componentDidMount () {
    const { user } = this.props
    listingIndex(user)
      // .then(res => (console.log(res.data.listings)))
      .then(res => this.setState({ listings: res.data.listings }))
      // .then(console.log(this.state.listings))
      .catch(console.error)
  }
  render () {
    const listings = this.state.listings.map(listing => (
      <div key={listing._id} className='col-4 p-3'>
        <div className='card border-primary'>
          <h5 className='card-header'>{listing.title}</h5>
          <p className='card-text'>Seller: {listing.owner.email}</p>
          <div className='card-link'>
            <Link to={`/listings/${listing._id}`}className='btn btn-secondary'>View Listing</Link>
          </div>
        </div>
      </div>
    ))
    return (
      <div className='container-fluid overflow-hidden'>
        <h2>Current Listings</h2>
        <Link to='/listing/create'>
          <Button variant='secondary btn-lg'>Create New Listing</Button>
        </Link>
        <div className='row row-cols-3 g-2'>
          {listings}
        </div>
      </div>
    )
  }
}
export default Listings
