import { useEffect, useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { InvoiceDetails } from "./components/InvoiceDetails";
import { ClientDetails } from "./components/ClientDetails";
import { ProductsTable } from "./components/ProductsTable";
import { InvoiceTotal } from "./components/InvoiceTotal";
import { calculateTotal } from "./services/calculateTotal";

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
  const [ total, setTotal ] = useState(0);
  const [ items, setItems ] = useState([]);
  const { id, description, client, company } = invoice;

  // useEffect HOOKS.
  useEffect( () => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
  }, [] );
  
  useEffect( () => {
    setTotal(calculateTotal(items))
  }, [items]);

  return (
    <>
      <div className="container">
        <div className="card my-3">

          <div className="card-header bg-dark py-4 px-5">
            {/* WEB PAGE NAME */}
            <div className="text-end text-light fst-italic"><h1>INVOICING.COM</h1></div>
            
            {/* COMPANY DETAILS */}
            <div className="px-2">
              <h3 className="text-light">{ company.name }</h3>
              <h4 className="text-light">{ company.fiscalNumber }</h4>
            </div>
            {/* INVOICE DETAILS */}
            <InvoiceDetails id = {id} description = {description} />
          </div>

          <div className="card-body py-4 px-5">
            <div className="my-3">
              {/* INVOICE CLIENT DETAILS */}
              <ClientDetails client = {client} />

              {/* INVOICE PRODUCTS TABLE */}
              <ProductsTable items = {items} />

              {/* INVOICE TOTAL */}
              <InvoiceTotal total = {total} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};