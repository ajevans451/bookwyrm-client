import axios from 'axios'
import apiUrl from '../apiConfig'

export const listingIndex = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/listings',
    headers: {
      'Authorization': `Token token=${user.token}`
    } // ,
    // data: {
    //   listing: {
    //     title: listing.title,
    //     description: listing.description,
    //     sellPrice: listing.sellPrice,
    //     minStartingBid: listing.minStartingBid
    //   }
    // }
  })
}
export const listingCreate = (listing, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/listings',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      listing: listing
    }
  })
}
export const listingShow = (listing, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/listings/' + listing.id,
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
export const listingDelete = (listing, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/listings/' + listing.id,
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
