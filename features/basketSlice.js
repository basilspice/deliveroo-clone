import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload._id}) as its not in basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, _id) =>
  state.basket.items.filter((item) => item._id === _id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// export const basketSlice = createSlice({
//   name: "basket",
//   initialState,
//   reducers: {
//     addToBasket: (state, action) => {
//       state.items = [...state.items, action.payload];
//     },
//     removeFromBasket: (state, action) => {
//       state.items = state.items.filter((item) => item._id !== action.payload._id);
//     },
//   },
// });

// export const { addToBasket, removeFromBasket } = basketSlice.actions;
// export const basketItems = (state) => state.basket.items;
// export const selectBasketItemsWithId = (state, _id) => state.basket.items.filter((item)=> item._id === _id)
// export const selectBasketTotal = (state) =>
//   state.basket.items.reduce((total, item) => total + item.price, 0);
// export default basketSlice.reducer;
