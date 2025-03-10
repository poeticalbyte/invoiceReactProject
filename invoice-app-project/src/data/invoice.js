import { v4 as uuidv4 } from 'uuid';  // Import UUID

// invoice: JS Object that contains all the data of the invoice.
export const invoice = {
  id: uuidv4(),
  description: 'Tech sales',
  client: {
    firstName: 'Aldous',
    lastName: 'Caldous',
    fiscalNumber: '1234567890',
    address: {
      country: 'Ecuador',
      city: 'Ibarra',
      street: 'Avenida San Marcos',
      number: '32',
    },
  },
  items: [
    {
      refe: 'P-I0709',
      product: 'Intel i7 97000k 8-core 3.6GHz',
      price: 289.99,
      quantity: 2,
    },
    {
      refe: 'K-M05',
      product: 'K100 RGB Optical-Mechanical Gaming Keyboard — CORSAIR OPX Switch',
      price: 199.99,
      quantity: 1,
    },
    {
      refe: 'M-R07',
      product: 'ROG Swift OLED PG27UCDM',
      price: 1099.00,
      quantity: 5,
    },
  ],
  company: {
    name: 'GON-TECH INDUSTRIES',
    fiscalNumber: '890.301.884-7',
  },
};