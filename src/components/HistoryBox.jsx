import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { ListState } from "../context/appContext";

const HistoryBox = () => {
  const {
    state: { list },
  } = ListState();

  return (
    <div>
      <ListGroup as="ul" style={{ overflowY: "scroll", height: "40vh" }}>
        {list.map((item) => {
          let color = item.type == "income" ? "green" : "red";

          return (
            <ListGroup.Item
              key={item.name}
              style={{ color: "black" }}
              className="d-flex justify-content-between align-items-center"
            >
              <h4 className="fw-bold text-center">{item.name}</h4>

              <p
                style={{
                  color: `${color}`,
                }}
              >
                ${item.amount}
              </p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default HistoryBox;
