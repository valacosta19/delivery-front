import { useState, useEffect } from 'react';
import Order from './components/Order'
import { getAllOrders, createOrders } from './services/orders/index'
import Form from './components/Form';
import { v4 as uuidv4 } from 'uuid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const App = () => {

  const [orders, setOrders] = useState([])
  const [newOrder, setNewOrder] = useState({
    status: 'Pendiente',
    pickupLat: 0,
    pickupLon: 0,
    dropoffLat: 0,
    dropoffLon: 0,
    zoneId: ""
  })
  const [errorOrder, setErrorOrder] = useState('')
  const [loadingOrder, setLoading ] = useState(false);

  useEffect(() => {
    getAllOrders().then(orders => {
      setOrders(orders);
    })
  }, []);


  const handleChange = (e) => {
    const value = e.target.value
    setNewOrder(prevNewOrder => ({...prevNewOrder, [e.target.name]: value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setLoading(true)
    
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

    setErrorOrder('');

    createOrders(orderToAddToState).then(newOrder => {
      setOrders((prevOrders) => [...prevOrders, {...newOrder}])
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      console.error(error);
      setErrorOrder("Something got wrong!")
    })

    setNewOrder('')
  }
  
  if (errorOrder) return <span>Error</span>

  return (
    <>
      <Typography variant="h1">Ordenes</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Fecha de creación</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Latitud de retiro</TableCell>
              <TableCell>Longitud de retiro</TableCell>
              <TableCell>Latitud de entrega</TableCell>
              <TableCell>Longitud de entrega</TableCell>
              <TableCell>Código postal</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => <Order key={order.id} {...order} /> )}
          </TableBody>
        </Table>
      </TableContainer>

      { loadingOrder && "Cargando..." }
      <Form submit={handleSubmit} change={handleChange} newOrder={newOrder} />
    </>
  );
}

export default App;
