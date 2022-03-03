import React from "react";
import { useGlobalContext } from "../../../store/CartProvider";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = ({ meal }) => {
  const { addItem } = useGlobalContext();

  const addToCartHandler = (amount) => {
    addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{`$${meal.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
