import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { listingShow, listingDelete } from '../../api/listing'

class Listing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listing: null,
      deleted: false
    }
  }
  componentDidMount () {
    const { user, match } = this.props
    // console.log(this.props)
    listingShow(match.params, user)
      .then(res => {
        console.log(res.data)
        this.setState({ listing: res.data.listing })
      })
      // .then(res => this.setState({ listing: res.data.listing }))
      .catch(console.error)
  }
  destroy = () => {
    const { user, match } = this.props
    listingDelete(match.params, user)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }
  render () {
    const { listing, deleted } = this.state
    if (!listing) {
      return <p>Loading listing...</p>
    }
    if (deleted) {
      return <Redirect to={
        { pathname: '/listings', state: { msg: 'Listing deleted!' } }
      } />
    }
    return (
      <div>
        <h4>{listing.title}</h4>
        <p>{listing.description}</p>
        <p>Buy Now for: {listing.sellPrice}</p>
        <p>Starting bid: {listing.minStartingBid}</p>
        <button>Place bid</button>
        <button onClick={this.destroy}>Delete</button>
        <Link to={`/listings/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/listings">Back to listings</Link>
      </div>
    )
  }
}
export default Listing
