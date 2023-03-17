import React, { useContext } from "react";
import { Context } from "../context/CardContext";
import "./card.css";

const Card = () => {
  const { itemList, state, dispatch } = useContext(Context);
  return (
    <div className="container">
      <h3>React Global State Management </h3>

      <div className="itemContainer">
        {itemList.map((i, index) => (
          <div key={index} className="add">
            <div>{i.product}</div>
            <div>{i.price}$</div>
            <button
              className="btn"
              onClick={() => dispatch({ type: "ADD", payload: i })}
            >
              Add
            </button>
          </div>
        ))}
      </div>

      <div className="cardList">
        <h3>Added Item List</h3>

        <div className="itemContainer">
          {state.length === 0 ? (
            <div>No items</div>
          ) : (
            state.map((i) => (
              <div key={i.id} className="add">
                <div>{i.product}</div>
                <div>{i.price}$</div>
                <button
                  className="btn"
                  onClick={() => dispatch({ type: "DELETE", payload: i })}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
