import TableRow from '@mui/material/TableRow';
import { TableCell } from "@mui/material";


const Order = ({ id, creationDate, status, pickup, dropoff, zoneId }) => {
  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{creationDate}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>{pickup.pickupLat}</TableCell>
        <TableCell>{pickup.pickupLon}</TableCell>
        <TableCell>{dropoff.dropoffLat}</TableCell>
        <TableCell>{dropoff.dropoffLon}</TableCell>
        <TableCell>{zoneId}</TableCell>
      </TableRow>
    </>
  )
}

export default Order;