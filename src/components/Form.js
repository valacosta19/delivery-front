import { Box, Grid, FormControl, TextField, MenuItem, Button, makeStyles } from '@mui/material';

const Form = ({ submit, change, newOrder }) => {

  let status = ['Pendiente', 'Asignado', 'En tránsito', 'Entregado']

  return (
    <Box>
      <FormControl>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency"
              select
              label='Seleccione el estado de la orden'
              value={newOrder.status}
              onChange={change}
              name='status'
              size="small"
              margin='normal'
              placeholder='Estado'
              fullWidth
            >
              {status.map((order) => (
                <MenuItem key={order} value={order}>
                  {order}
                </MenuItem>
              ))})
            </TextField>
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-textarea"
              label="Ingresa la latitud de retiro:"
              name='pickupLat'
              onChange={change}
              type='number'
              value={newOrder.pickupLat}
              multiline
              size="small"
              margin='normal'
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-textarea"
              label="Ingresa la longitud de retiro:"
              name='pickupLon'
              onChange={change}
              type='number'
              value={newOrder.pickupLon}
              multiline
              size="small"
              margin='normal'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-textarea"
              label="Ingresa la latitud de entrega:"
              name='dropoffLat'
              onChange={change}
              type='number'
              value={newOrder.dropoffLat}
              multiline
              size="small"
              margin='normal'
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-textarea"
              label="Ingresa la longitud de entrega:"
              name='dropoffLon'
              onChange={change}
              type='number'
              value={newOrder.dropoffLon}
              multiline
              size="small"
              margin='normal'
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-textarea"
              label="Ingresa el id de la zona:"
              name='zoneId'
              onChange={change}
              type='text'
              value={newOrder.zoneId}
              multiline
              size="small"
              margin='normal'
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>  
            <Button onClick={submit} variant='contained' size='large'>Crear orden</Button>
          </Grid>

        </Grid>
      </FormControl>
    </Box>
  )
}

export default Form;