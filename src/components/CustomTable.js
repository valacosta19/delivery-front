import React from "react";
import Order from './Order';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export const CustomTable = ({currentOrders}) => {
  
  return(
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
          {currentOrders.map((order) => <Order key={order.id} {...order} /> )}
        </TableBody>
      </Table>
    </TableContainer>
  )

}