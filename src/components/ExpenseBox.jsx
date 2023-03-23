import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListState } from "../context/appContext";

const ExpenseBox = () => {
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
      
      return {incomeBalance ,expenseBalance
        
      }
    };

    var totalAll=total()


  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body className="d-flex justify-content-center align-items-center flex-column">
          <Card.Title>Income</Card.Title>
          <Card.Text>
            <span style={{ color: "green" ,fontSize:"20px"}}>${totalAll.incomeBalance}</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body className="d-flex justify-content-center align-items-center flex-column">
          <Card.Title>Expense</Card.Title>
          <Card.Text>
          <span style={{ color: "red" ,fontSize:"20px"}}>${totalAll.expenseBalance}</span>

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExpenseBox;
