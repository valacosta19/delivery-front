const Form = ({ submit, change, newOrder }) => {

  let status = ['Pendiente', 'Asignado', 'En tránsito', 'Entregado']

  return (
    <form onSubmit={submit}>

      <select name='status' onChange={change}>
        {
          status.map((order) => <option key={order} value={order}>{order}</option>)
        })
      </select>

      <div>
        <label>Ingresa la latitud de retiro:
          <input type='number' name='pickupLat' onChange={change} value={newOrder.pickupLat} />
        </label>
      </div>

      <div>
        <label>Ingresa la longitud de retiro:
          <input type='number' name='pickupLon' onChange={change} value={newOrder.pickupLon}  />
        </label>
      </div>

      <div>
        <label>Ingresa la latitud de entrega:
          <input type='number' name='dropoffLat' onChange={change} value={newOrder.dropoffLat}  />
        </label>
      </div>

      <div>
        <label>Ingresa la longitud de entrega:
          <input type='number' name='dropoffLon' onChange={change} value={newOrder.dropoffLon}  />
        </label>
      </div>

      <div>
        <label>Ingresa el id de la zona:
          <input type='text' name='zoneId' onChange={change} value={newOrder.zoneId} />
        </label>
      </div>

      <button>Crear orden</button>
    </form>
  )
}

export default Form;