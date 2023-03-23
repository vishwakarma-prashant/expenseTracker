import React, { createContext, useContext, useReducer, useState } from "react";
import { addReducer } from "./reducer";
export const ExpenseContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(addReducer, {
    list: [
      {
        type: "expense",
        name:"pen",
        amount: 30,
      },
      {
        type: "income",
        name:"payment",
        amount: 60,
      },
    
    ],
  });

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {" "}
      {children}{" "}
    </ExpenseContext.Provider>
  );
};

export const ListState = () => {
  return useContext(ExpenseContext);
};

export default Context;
