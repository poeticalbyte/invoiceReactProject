export const InvoiceApp = () => {


  return (
    <>
      <div className="container">
        <div className="card my-3">

          <div className="card-header bg-info py-4 px-5">
            {/* WEB PAGE NAME */}
            <div className="text-end"><h1>INVOICING.COM</h1></div>
            
            {/* COMPANY DETAILS */}
            <h3>G-TECH</h3>
            {/* INVOICE DETAILS */}
            <ul className="list-group">
              <li className="list-group-item"><b>ID:</b> XXXX-XXX-XXX</li>
              <li className="list-group-item"><b>Description:</b> ...</li>
            </ul>
          </div>

          <div className="card-body py-4 px-5">
            
            {/* INVOICE CLIENT DETAILS */}
            <div className="my-3">
              <div>
                <h3>Client details</h3>
                <ul className="list-group">
                  <li className="list-group-item bg-info"><b>CLIENT NAME</b></li>
                  <li className="list-group-item">CITY, COUNTRY</li>
                  <li className="list-group-item">STREET HOUSE NUMBER</li>
                </ul>
              </div>

              {/* INVOICE PRODUCTS TABLE */}
              <h4 className="text-center">Invoice products</h4>

              <table className="table table-striped table-hover">
                {/* TABLE HEAD */}
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Product</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                
                {/* TABLE BODY: CONTENT */}
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>LCD MONITOR</td>
                    <td className="text-center">500</td>
                    <td className="text-center">5</td>
                    <td className="text-center"><button className="btn btn-danger btn-sm">X</button></td>
                  </tr>
                </tbody>
              </table>

              <div className="row justify-content-end px-2">
                <div className="col-8 text-end"><h3>Total</h3></div>
                <div className="col-2 text-end"><h3 className="fw-normal"><span>2500</span></h3></div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};