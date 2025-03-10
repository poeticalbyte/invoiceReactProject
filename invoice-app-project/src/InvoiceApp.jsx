import { useEffect, useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { InvoiceDetails } from "./components/InvoiceDetails";
import { ClientDetails } from "./components/ClientDetails";
import { ProductsTable } from "./components/ProductsTable";
import { InvoiceTotal } from "./components/InvoiceTotal";
import { calculateTotal } from "./services/calculateTotal";
import { AddItemForm } from "./components/AddItemForm";

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
  const [ activeForm, setActiveForm ] = useState(false);
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

  // EVENT HANDLER.
  const onAddItem = ({refe, product, price, quantity}) => {
    setItems([...items,
      {
        refe: refe.trim(),
        product: product.trim(),
        price: +price.trim(),
        quantity: +quantity.trim(),
      }]);
  }

  const onDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  }

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  }

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
            <InvoiceDetails id={id} description={description} />
          </div>

          <div className="card-body py-4 px-5">
            <div className="my-3">
              {/* INVOICE CLIENT DETAILS */}
              <ClientDetails client={client} />

              {/* INVOICE PRODUCTS TABLE */}
              <ProductsTable items={items} handler={ (index) => {onDeleteItem(index)} } />

              {/* BUTTON TO DISPLAY/HIDE ADD ITEM FORM */}
              <button
              className="btn btn-secondary"
              onClick={onActiveForm}>
                {!activeForm ? 'New item' : 'Close' }
              </button>

              {/* ADD ITEM FORM */}
              { !activeForm ||< AddItemForm handler={(newItem) => {onAddItem(newItem)}} /> }

              {/* INVOICE TOTAL */}
              <InvoiceTotal total={total} />
            </div>
            
          </div>

          
        </div>
      </div>
    </>
  );
};