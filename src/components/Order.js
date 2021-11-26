const Order = ({ id, creationDate, status, pickup, dropoff, zoneId }) => {
  return (
    <>
      <p>{id}</p>
      <p>{creationDate}</p>
      <p>{status}</p>
      <p>{pickup.pickupLat}</p>
      <p>{pickup.pickupLon}</p>
      <p>{dropoff.dropoffLat}</p>
      <p>{dropoff.dropoffLon}</p>
      <p>{zoneId}</p>
    </>
  )
}

export default Order;