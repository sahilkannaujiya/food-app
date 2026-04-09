import React, { useState } from "react";
import FoodsItem from "./componant/FoodsItem";
import Messege from "./componant/Messege";
import Container from "./componant/Container";
import Input from "./componant/FoodItemInput";

export default function App() {

  //let [textValue, setState]= useState();
  let[foods, setFoodState] = useState([]);
 
  let handleOnKeyDown = (event) => {

    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [newFoodItem, ...foods];
      setFoodState(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="app-name">Healthy Foods</h1>
        <Input handleOnKeyDown={handleOnKeyDown}></Input>
        <Messege items={foods}></Messege>
        <FoodsItem items={foods}></FoodsItem>
      </Container>

      <Container>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          sequi ex iusto quidem veniam reprehenderit amet omnis quibusdam nulla
          repellat.
        </p>
      </Container>
    </>
  );
}
