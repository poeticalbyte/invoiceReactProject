export const ProductsTable = ({items, handler}) => {

  return (
    <>
      <h4 className="text-center">Invoice products</h4>
      <table className="table table-striped table-hover">
        {/* TABLE HEAD */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Ref.</th>
            <th className="px-4">Product</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Total</th>
            <th className="text-center text-danger">Delete</th>
          </tr>
        </thead>
        
        {/* TABLE BODY: CONTENT */}
        <tbody>
          { items.map( ({ refe, product, price, quantity }, index) => (
              <tr>
                <td>{ index + 1 }</td>
                <td>{ refe }</td>
                <td className="px-4">{ product }</td>
                <td className="text-center">${ price }</td>
                <td className="text-center">{ quantity }</td>
                <td className="text-center">${ quantity * price }</td>
                <td className="text-center">
                  <button className="btn btn-danger btn-sm" onClick={() => handler(index)}>X</button>
                </td>
              </tr>
            ) ) }
          {/* <tr>
            <td>1</td>
            <td>K-1561</td>
            <td>LCD MONITOR</td>
            <td className="text-center">500</td>
            <td className="text-center">5</td>
            <td className="text-center"><button className="btn btn-danger btn-sm">X</button></td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
}
