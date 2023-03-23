import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { ListState } from "../context/appContext";

const Balance = () => {
  const {
    state: { list },
  } = ListState();


  const total =  () => {
    
  var totalBalance = 0;
  var expenseBalance = 0;
  var incomeBalance = 0;
     list.map((item) => {
      if (item.type == "expense") {
        expenseBalance = Number(expenseBalance) + Number(item.amount);

      }
      if (item.type == "income") {
        incomeBalance = Number(incomeBalance) + Number(item.amount);
      }
    });
    console.log(incomeBalance, expenseBalance);
    totalBalance = incomeBalance - expenseBalance
    
    return totalBalance > 0 ? totalBalance : 0 
  };
 var finalAmount = total();
 



  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ margin: "5px" }}
    >
      <h5> YOUR BALANCE : &nbsp; &nbsp; </h5>

      <h4>${finalAmount}</h4>
    </div>
  );
};

export default Balance;
