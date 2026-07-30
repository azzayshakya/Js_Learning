import React from "react";
import { CustomFilter, CustomMap } from "./Custom/Methods";

export default function App() {
  let arrayWithString = ["a", "sdfa", "ajjuu", "asd"];
  const dataWithString = CustomMap(arrayWithString, (a) => a.toUpperCase());

  let array = [1, 2, 3, 4, 5];
  const data = CustomMap(array, (a) => a * 2);

  let newD = "1234";
  const suii = CustomMap(newD, (a) => a + 1);

  let filterArr = [1, 4, 7, 1, 9];
  CustomFilter(filterArr, (e) => e > 5);
  return <div>App</div>;
}
