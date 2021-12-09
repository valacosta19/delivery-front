import { useState } from 'react';
import Form from './components/Form';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, ThemeProvider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomTable } from './components/CustomTable';
import useOrders from './hooks/useOrders';
import theme from './theme/index'

const useStyles = makeStyles({
  title: {
    marginTop: '2em'
  }
})

const App = () => {

  const classes = useStyles()

  const {orders, loadingOrder, errorOrder, createOrder} = useOrders()
  const [newOrder, setNewOrder] = useState({
    status: 'Pendiente',
    pickupLat: 0,
    pickupLon: 0,
    dropoffLat: 0,
    dropoffLon: 0,
    zoneId: 0
  })

  const handleChange = (e) => {
    const value = e.target.value
    setNewOrder(prevNewOrder => ({...prevNewOrder, [e.target.name]: value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    createOrder(newOrder)

    setNewOrder({
      status: 'Pendiente',
      pickupLat: 0,
      pickupLon: 0,
      dropoffLat: 0,
      dropoffLon: 0,
      zoneId: 0
    })
  }
  
  if (errorOrder) return <span>Error</span>

  if (loadingOrder) return <span>Cargando...</span>

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h1">Ordenes</Typography>

        <Typography variant="h2">Agregar una orden:</Typography>

        <Form submit={handleSubmit} change={handleChange} newOrder={newOrder} />

        <Typography variant="h2" className={classes.title}>Listado de ordenes</Typography>
        
        <CustomTable currentOrders={orders} />

      </Container>
    </ThemeProvider>
  );
}

export default App;
