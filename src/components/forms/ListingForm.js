import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ListingForm = ({ listing, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder="Listing Title"
        value={listing.title}
        name="title"
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Description</Form.Label>
      <Form.Control
        placeholder="Listing Description"
        value={listing.description}
        name="description"
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Sell Price</Form.Label>
      <Form.Control
        placeholder="Listing Sell Price"
        value={listing.sellPrice}
        name="sellPrice"
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Minimum Starting Bid</Form.Label>
      <Form.Control
        placeholder="Listing Starting Bid"
        value={listing.minStartingBid}
        name="minStartingBid"
        onChange={handleChange}
      />
    </Form.Group>
    <Button variant='success' type="submit">Submit</Button>
    <Link to='/listings'>
      <Button variant='danger'>Cancel</Button>
    </Link>
  </Form>
)

export default ListingForm
