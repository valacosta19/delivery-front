import axios from 'axios'

export async function getAllOrders() {
  const { data } = await axios.get('https://kiwibot-challenge-25486-default-rtdb.firebaseio.com/api/delivery_orders.json')
  return Object.values(data)
}

export async function createOrders(orderToAddToState) {
  await axios.post('https://kiwibot-challenge-25486-default-rtdb.firebaseio.com/api/delivery_orders.json', orderToAddToState)
  return orderToAddToState
}