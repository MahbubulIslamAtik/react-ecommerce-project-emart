// ADD ITEM TO CART //

export const addCart = ((product) => {
   return {
      type: "ADDITEM",
      payload: product
   }
});

// DELETE ITEM TO CART //

export const deleteCart = ((product) => {
   return {
      type: "DELETEITEM",
      payload: product
   }
})