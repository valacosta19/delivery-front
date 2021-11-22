import axios from 'axios'

export async function getAllOrders() {
  const { data } = await axios.get('https://kiwibot-challenge-25486.firebaseapp.com/api/delivery_orders')
  return data
}

export async function createOrders({ id, creationDate, status, pickup, dropoff, zoneId }) {
  let { pickupLat, pickupLon } = pickup
  let { dropoffLat, dropoffLon } = dropoff
  const { data } = await axios.post('https://kiwibot-challenge-25486.firebaseapp.com/api/delivery_orders', { id, creationDate, status, pickupLat, pickupLon, dropoffLat, dropoffLon, zoneId })
  return data
}