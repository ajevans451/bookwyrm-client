import React from 'react'
import { Link } from 'react-router-dom'

const ListingForm = ({ listing, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="Listing Title"
      value={listing.title}
      name="title"
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder="Listing Description"
      value={listing.description}
      name="description"
      onChange={handleChange}
    />
    <label>Sell Price</label>
    <input
      placeholder="Listing Sell Price"
      value={listing.sellPrice}
      name="sellPrice"
      onChange={handleChange}
    />
    <label>Minimum Starting Bid</label>
    <input
      placeholder="Listing Starting Bid"
      value={listing.minStartingBid}
      name="minStartingBid"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to='/listings'>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ListingForm
