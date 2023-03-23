import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ListState } from "../context/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const InputBox = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const {
    state: { list },
    dispatch,
  } = ListState();

  const addToList = (item) => {
    dispatch({
      type: "ADD_TO_LIST",
      payload:item ,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(e)

    console.log(text, amount, type);
    const item ={
    name:text,
    amount:amount,
    type:type
    }

    addToList(item)
  };
  return (
    <div>
      {" "}
      <Form
        style={{ width: "70%", margin: "auto" }}
        className=" d-flex justify-content-center align-items-center flex-column"
        onSubmit={handelSubmit}
      >
        <Form.Group
          style={{ width: "60%" }}
          className="d-flex justify-content-between align-items-center"
        >
          <Form.Select
            aria-label="Default select example"
            required
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </Form.Select>
        </Form.Group>

        <Form.Group style={{ width: "100%" }}>
          <Form.Label>Text </Form.Label>
          <Form.Control
            type="text"
            placeholder="Transcation Details"
            required
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>

        <Form.Group style={{ width: "100%" }}>
          <Form.Label>Amount</Form.Label>

          <Form.Control
            type="number"
            placeholder="Amount"
            required
            min="0"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>

        <Button className="" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InputBox;
