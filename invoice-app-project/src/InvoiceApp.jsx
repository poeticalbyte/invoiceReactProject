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
  const [ formItem, setFormItem ] = useState(
    {
      refe: '',
      product: '',
      price: '',
      quantity: '',
    }
  );
  const { refe, product, price, quantity } = formItem;

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
  const onInputChange = ({ target: { name, value } }) => {
    setFormItem({
      ...formItem,
      [name]: value,
    });
  }

  const onAddItem = ({refe, product, price, quantity}) => {
    setItems([...items,
      {
        refe: refe.trim(),
        product: product.trim(),
        price: +price.trim(),
        quantity: +quantity.trim(),
      }]);
  }

  const onAddItemSubmit = (event) => {
    event.preventDefault(); // Avoids auto-refreshing the web page (default behavior).

    // Product input conditional:
    if(refe.trim().length <= 1) return;

    // Product input conditional:
    if(product.trim().length <= 1) return;

    // Price input conditionals:
    if(price.trim().length < 1) return;
    // In case no value was entered, triggers an alert.
    if( isNaN(price.trim()) ) {
      alert('Error: invalid price value.')
      return
    };

    // Quantity input conditionals:
    if(quantity.trim().length < 1) return;
    // In case no value was entered, triggers an alert.
    if( isNaN(price.trim()) ) {
      alert('Error: invalid quantity value.')
      return
    };

    // new item is added to current items.
    onAddItem(formItem);

    // formItem is reset.
    setFormItem({
      refe: '',
      product: '',
      price: '',
      quantity: '',
    });
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
              <ProductsTable items={items} />

              {/* BUTTON TO ADD NEW ITEM */}
              <button className="btn btn-secondary">
                {/* { !activeForm ? 'New item' : 'Close' } */}
                New item
              </button>

              <form className="w-50" onSubmit={onAddItemSubmit}>

                <input
                type="text"
                name="refe"
                placeholder="Reference..."
                value={refe}
                onChange={event => onInputChange(event)}
                className="form-control m-3" />
                <input
                type="text"
                name="product"
                placeholder="Product name..."
                value={product}
                onChange={event => onInputChange(event)}
                className="form-control m-3" />
                <input
                type="text"
                name="price"
                placeholder="Price..."
                value={price}
                onChange={event => onInputChange(event)}
                className="form-control m-3" />
                <input
                type="text"
                name="quantity"
                placeholder="Quantity..."
                value={quantity}
                onChange={event => onInputChange(event)}
                className="form-control m-3" />

                <button
                type="submit"
                className="btn btn-success m-3">
                  Add
                </button>

              </form>

              {/* INVOICE TOTAL */}
              <InvoiceTotal total={total} />
            </div>
            
          </div>

          
        </div>
      </div>
    </>
  );
};