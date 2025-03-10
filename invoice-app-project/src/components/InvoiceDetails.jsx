export const InvoiceDetails = ({id, description}) => {

  return (
    <>
      <ul className="list-group w-50">
        <li className="list-group-item"><b>ID:</b> { id }</li>
        <li className="list-group-item"><b>Description:</b> { description }</li>
      </ul>
    </>
  );
}