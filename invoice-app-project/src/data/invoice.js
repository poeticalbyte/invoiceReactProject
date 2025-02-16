// invoice: JS Object that contains all the data of the invoice.
export const invoice = {
  id: 0,
  client: {
    firstName: 'Aldous',
    lastName: 'Caldous',
    addres: {
      fiscalNumber: 1234567,
      country: 'Ecuador',
      city: 'Ibarra',
      street: 'Avenida San Marcos',
      number: 32,
    },
  },
  items: [
    {
      product: 'Intel i7 97000k 8-core 3.6GHz',
      price: 289.99,
      quantity: 1,
    },
    {
      product: 'K100 RGB Optical-Mechanical Gaming Keyboard — CORSAIR OPX Switch',
      price: 199.99,
      quantity: 1,
    },
    {
      product: 'ROG Swift OLED PG27UCDM',
      price: 1099.00,
      quantity: 1,
    },
  ],
};