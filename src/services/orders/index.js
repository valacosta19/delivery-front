import axios from 'axios'

export async function getAllOrders() {
  const { data } = await axios.get('https://polar-reef-34203.herokuapp.com/api/delivery_orders')
  return data
}

export async function createOrders({ id, creationDate, status, pickup, dropoff, zoneId }) {
  let { pickupLat, pickupLon } = pickup
  let { dropoffLat, dropoffLon } = dropoff
  const { data } = await axios.post('https://polar-reef-34203.herokuapp.com/api/delivery_orders', { id, creationDate, status, pickupLat, pickupLon, dropoffLat, dropoffLon, zoneId })
  return data
}