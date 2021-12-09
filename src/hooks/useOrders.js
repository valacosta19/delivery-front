
import { useState, useEffect } from 'react';
import { getAllOrders } from '../services/orders';
import { v4 as uuidv4 } from 'uuid';
import { createOrders } from '../services/orders/index'

const useOrders = () => {
  const [orders, setOrders] = useState([])
  const [loadingOrder, setLoadingOrder ] = useState(true)
  const [errorOrder, setErrorOrder] = useState(false)
  
  useEffect(() => {
    setLoadingOrder(true);
    
    getAllOrders().then(orders => {
      setOrders(orders);
      setLoadingOrder(false);
    })
  }, []);

  const createOrder = (newOrder) => {
    setLoadingOrder(true)
    
    const orderToAddToState = {
      id: uuidv4(),
      creationDate: new Date().toISOString(),
      status: newOrder.status,
      pickup: {
        pickupLat: newOrder.pickupLat,
        pickupLon: newOrder.pickupLon
      },
      dropoff: {
        dropoffLat: newOrder.dropoffLat,
        dropoffLon: newOrder.dropoffLon
      },
      zoneId: newOrder.zoneId
    }

    setErrorOrder(false);

    createOrders(orderToAddToState).then(newOrder => {
      setOrders((prevOrders) => [...prevOrders, {...newOrder}])
      setLoadingOrder(false);
    }).catch((error) => {
      setLoadingOrder(false);
      console.error(error);
      setErrorOrder(true)
    })

  }

  return {
    orders,
    loadingOrder,
    errorOrder,
    createOrder
  }
  
}

export default useOrders;
