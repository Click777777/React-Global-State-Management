import React, { createContext, useReducer } from "react";

export const Context = createContext();
const itemList = [
  { product: "Laptop", price: 1000 },
  { product: "Phone", price: 800 },
  { product: "Tablet", price: 900 },
  { product: "PowerBank", price: 500 },
];

const CardContext = ({ children }) => {
  const add = (state, item) => {
    const newItem = {
      product: item.product,
      price: item.price,
      id: Math.random(),
    };

    return [...state, newItem];
  };
  const deletes = (state, item) => {
    return state.filter((i) => {
      return i.id !== item.id;
    });
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return add(state, action.payload);
      case "DELETE":
        return deletes(state, action.payload);
      default:
        return state;
    }
  };
  const intitalValue = [];
  const [state, dispatch] = useReducer(reducer, intitalValue);
  return (
    <Context.Provider value={{ itemList, state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default CardContext;
