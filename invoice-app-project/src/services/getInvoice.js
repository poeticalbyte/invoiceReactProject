import { invoice } from "../data/invoice";
import { addIdToItems } from "./addIdToItems";
import { calculateTotal } from "./calculateTotal";

// getInvoice(): This function is used to retrieve the invoice data with additional data (unique IDs for each item, total cost as the sum of items prices).
export const getInvoice = () => {

  // total: Variable that contains the total of the invoice.items, calculated as price * quantity.
  // It is calculated here since this data is needed for the invoice application.
  const total = calculateTotal(invoice.items);
  
  // invoiceWithIds: Contains the original invoice object, but with a unique ID generated for each item in invoice.items. 
  const invoiceWithIds = addIdToItems(invoice);
  
  // Returns all the enhanced invoice properties plus the total variable.
  return {...invoiceWithIds, total};

};
