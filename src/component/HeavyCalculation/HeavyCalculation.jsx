import { useState } from "react";

export default function HeavyCalculation() {
  // const [value, setValue] = useState(1);
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);

  // const result =heavyCalculation(value)
  //const increaseValue = () => setValue(value + 1);

  return (
    <div>
      <button onClick={increaseCounter}>Augmenter compteur</button>
      <div>Compteur : {counter}</div>
      {/* 
      <button onClick={increaseValue}>Augmenter value</button>
      <div>Result : {result}</div>
*/}
    </div>
  );
}
/*
function heavyCalculation(value) {
  console.log("heavyCalculation()");
  let newResult = 0;
  for (let i = 0; i < 1000; i++) {
    console.log("heavyCalculation loop");
    newResult += i * value;
  }
  return newResult;
}
*/
