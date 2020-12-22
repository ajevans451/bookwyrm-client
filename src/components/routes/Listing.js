import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class Listing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listing: null,
      deleted: false
    }
  }
  componentDidMount () {
    axios(`${apiUrl}/listings/${this.props.match.params.id}`)
      .then(res => this.setState({ listing: res.data.listing }))
      .catch(console.error)
  }
  destroy = () => {
    axios({
      url: `${apiUrl}/listings/${this.props.match.params.id}`,
      method: 'DELETE'
    })
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
        <button onClick={this.destroy}>Delete Listing</button>
        <Link to={`/listings/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/listings">Back to listings</Link>
      </div>
    )
  }
}
export default Listing
