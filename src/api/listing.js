import axios from 'axios'
import apiUrl from '../apiConfig'

export const listingIndex = (listing, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/listings',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      listing: {
        title: listing.title,
        description: listing.description,
        sellPrice: listing.sellPrice,
        minStartingBid: listing.minStartingBid
      }
    }
  })
}
