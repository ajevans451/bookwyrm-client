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
export const listingShow = (listing, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/listings/' + listing._id,
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
