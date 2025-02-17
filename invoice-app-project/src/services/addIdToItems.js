import { v4 as uuidv4 } from 'uuid';  // Import UUID

// addIdToItems(invoice): receives an invoice object and adds a UUID to each element of invoice.items.
export const addIdToItems = ( invoice ) => {
  // All the logic is contained within the return statement:
  return {
    // The spread operator (...) is used to include all properties from the invoice object passed as a parameter.
    ...invoice,
    // Here's where the main logic happens: access the invoice array items and uses the map method to interate over the array.
    // In each iteration, adds a new property: id, with its value predefined by using the uuidv4() function, which generates a unique ID.
    items: invoice.items.map( (item) => {

      const itemId = uuidv4(); // Generates a unique ID for each item.

      return ({
        ...item,
        // Adds the unique ID previously generated to the iterated item.
        id: itemId,
      })

    } ),
  };
};
