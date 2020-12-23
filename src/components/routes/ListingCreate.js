import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ListingForm from '../forms/ListingForm'

class ListingCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      listing: {
        title: '',
        description: '',
        sellPrice: 0,
        minStartingBid: 0
      },
      createdListingId: null
    }
  }
  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const updatedListing = Object.assign(this.state.listing, updatedField)
    this.setState({ listing: updatedListing })
  }
  handleSubmit = event => {
    event.preventDefault()
  }
  render () {
    const { handleChange, handleSubmit } = this
    const { createdListingId, listing } = this.state

    if (createdListingId) {
      return <Redirect to={`/listings/${createdListingId}`} />
    }
    return (
      <div>
        <ListingForm
          listing={listing}
          handleChange={handleChange}
          handleSubmit={handleSubmit} />
      </div>
    )
  }
}
export default ListingCreate
