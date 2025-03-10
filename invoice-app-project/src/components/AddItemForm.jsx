import { useState } from "react";

export const AddItemForm = ({handler}) => {

  const [ formItem, setFormItem ] = useState(
      {
        refe: '',
        product: '',
        price: '',
        quantity: '',
      }
    );
  const { refe, product, price, quantity } = formItem;

  const onInputChange = ({ target: { name, value } }) => {
    setFormItem({
      ...formItem,
      [name]: value,
    });
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
        alert('Error: invalid price value.');
        return
      };
  
      // Quantity input conditionals:
      if(quantity.trim().length < 1) return;
      // In case no value was entered, triggers an alert.
      if( isNaN(quantity.trim()) ) {
        alert('Error: invalid quantity value.');
        return;
      };
  
      // new item is added to current items.
      handler(formItem);
  
      // formItem is reset.
      setFormItem({
        refe: '',
        product: '',
        price: '',
        quantity: '',
      });
    }

  return (
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
      type="number"
      name="price"
      placeholder="Price..."
      value={price}
      onChange={event => onInputChange(event)}
      className="form-control m-3" />
      <input
      type="number"
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
  );
}