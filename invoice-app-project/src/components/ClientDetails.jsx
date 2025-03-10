export const ClientDetails = ({client}) => {

  return (
    <>
      <div>
        <h3>Client details</h3>
        <ul className="list-group">
          <li className="list-group-item bg-dark text-light"><b>{client.firstName} {client.lastName}</b> - C.C. {client.fiscalNumber}</li>
          <li className="list-group-item">{client.address.city}, {client.address.country}</li>
          <li className="list-group-item">{client.address.street}, {client.address.number}</li>
        </ul>
      </div>
    </>
  );
}
