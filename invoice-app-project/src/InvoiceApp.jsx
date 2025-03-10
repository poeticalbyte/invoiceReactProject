import { useEffect, useState } from "react";
import { getInvoice } from "./services/getInvoice";

export const InvoiceApp = () => {

  // defaultInvoice: layout of the invoice data.
  const defaultInvoice = {
    id: '',
    description: '',
    client: {
      firstName: '',
      lastName: '',
      fiscalNumber: '',
      address: {
        country: '',
        city: '',
        street: '',
        number: ''
      },
    },
    items: [],
    company: {
      name: 'GON-TECH INDUSTRIES',
      fiscalNumber: '890.301.884-5',
    },
    total: 0,
  };

  // REACT HOOKS.
  // useState HOOKS.
  const [ invoice, setInvoice ] = useState(defaultInvoice);
  const { id, description, client, company,  items, total } = invoice;

  // useEffect HOOKS.
  useEffect( () => {
    const data = getInvoice();
    setInvoice(data);
  }, [] );

  return (
    <>
      <div className="container">
        <div className="card my-3">

          <div className="card-header bg-primary py-4 px-5">
            {/* WEB PAGE NAME */}
            <div className="text-end"><h1>INVOICING.COM</h1></div>
            
            {/* COMPANY DETAILS */}
            <div className="px-2">
              <h3>{ company.name }</h3>
              <h4>{ company.fiscalNumber }</h4>
            </div>
            {/* INVOICE DETAILS */}
            <ul className="list-group w-50">
              <li className="list-group-item"><b>ID:</b> { id }</li>
              <li className="list-group-item"><b>Description:</b> { description }</li>
            </ul>
          </div>

          <div className="card-body py-4 px-5">
            
            {/* INVOICE CLIENT DETAILS */}
            <div className="my-3">
              <div>
                <h3>Client details</h3>
                <ul className="list-group">
                  <li className="list-group-item bg-primary"><b>{client.firstName} {client.lastName}</b> - C.C. {client.fiscalNumber}</li>
                  <li className="list-group-item">{client.address.city}, {client.address.country}</li>
                  <li className="list-group-item">{client.address.street}, {client.address.number}</li>
                </ul>
              </div>

              {/* INVOICE PRODUCTS TABLE */}
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
                  {
                    items.map( ({ refe, product, price, quantity }, index) => (
                      <tr>
                        <td>{ index + 1 }</td>
                        <td>{ refe }</td>
                        <td className="px-4">{ product }</td>
                        <td className="text-center">${ price }</td>
                        <td className="text-center">{ quantity }</td>
                        <td className="text-center">${ quantity * price }</td>
                        <td className="text-center"><button className="btn btn-danger btn-sm">X</button></td>
                      </tr>
                    ) )
                  }
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

              <div className="row justify-content-end px-2">
                <div className="col-8 text-end"><h3>Subtotal</h3></div>
                <div className="col-2 text-end"><h3 className="fw-normal">$<span>{(total).toFixed(2)}</span></h3></div>
              </div>
              <div className="row justify-content-end px-2">
                <div className="col-8 text-end"><h3>IVA &#40;19%&#41;</h3></div>
                <div className="col-2 text-end"><h3 className="fw-normal">$<span>{(total * 0.19).toFixed(2)}</span></h3></div>
              </div>
              <div className="row justify-content-end px-2">
                <div className="col-8 text-end"><h3>TOTAL</h3></div>
                <div className="col-2 text-end"><h3 className="fw-normal">$<span>{(total * 0.19 + total).toFixed(2)}</span></h3></div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};