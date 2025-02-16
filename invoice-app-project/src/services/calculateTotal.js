
export const calculateTotal = ( invoice ) => {

  // Calculate total of the invoice using the items price and quantity.
  // total: the variable is declared using const because its reference on memory is not going to change necessary, only its value it's going to be recalculated.
  const total = invoice
    // map method: returns a new array from a performed action to an specified array.
    .map( (item) => item.price * item.quantity )
    // reduce method: in this case, works like a for loop that iterates through the array elements to finally return the sum of the elements (number).
    // This reduce method in particular seems to not only be used for an array of numbers.
    .reduce( (prevValue, currentValue) => prevValue + currentValue, 0 );

  return total;
};
