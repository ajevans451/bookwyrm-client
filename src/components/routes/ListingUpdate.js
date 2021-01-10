import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ListingForm from '../forms/ListingForm'
import { listingShow, listingUpdate } from '../../api/listing'

class ListingUpdate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      listing: {
        title: '',
        description: '',
        sellPrice: '',
        minStartingBid: ''
      },
      updated: false
    }
  }
  componentDidMount () {
    const { user, match } = this.props
    // console.log(this.props)
    listingShow(match.params, user)
      .then(res => {
        // console.log(res.data)
        this.setState({ listing: res.data.listing })
      })
      // .then(res => this.setState({ listing: res.data.listing }))
      .catch(console.error)
  }
  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const updatedListing = Object.assign(this.state.listing, updatedField)
    this.setState({ listing: updatedListing })
  }
  handleSubmit = event => {
    const { user, match } = this.props
    const { listing } = this.state
    event.preventDefault()
    listingUpdate(match.params, listing, user)
      .then(res => {
        // console.log(res)
        this.setState({ updated: true })
      })
      .catch(console.error)
  }
  render () {
    const { match } = this.props
    const { handleChange, handleSubmit } = this
    const { updated, listing } = this.state
    if (updated) {
      return <Redirect to={`/listings/${match.params.id}`} />
    }
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Update Listing</h3>
          <ListingForm
            listing={listing}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    )
  }
}
export default ListingUpdate
