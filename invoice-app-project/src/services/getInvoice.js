import { invoice } from "../data/invoice";
import { calculateTotal } from "./calculateTotal";

// getInvoice(): this function is used to communicate the invoice data to where it's needed.
export const getInvoice = () => {
  // total: variable that contains the total of the invoice.intems price * quantity.
  // It is calculated here since this data is needed for the invoice application.
  total = calculateTotal(invoice.items);

  // All the invoice elements (id, client, items) plus this total variable are passed in the return.
  return {...invoice, total};
};
