const Order = ({ id, creationDate, status, pickup, dropoff, zoneId }) => {
  let { pickupLat, pickupLon } = pickup
  let { dropoffLat, dropoffLon } = dropoff

  return (
    <>
      <p>{id}</p>
      <p>{creationDate}</p>
      <p>{status}</p>
      <p>{pickupLat}</p>
      <p>{pickupLon}</p>
      <p>{dropoffLat}</p>
      <p>{dropoffLon}</p>
      <p>{zoneId}</p>
    </>
  )
}

export default Order;