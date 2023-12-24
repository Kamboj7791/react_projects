import { useState } from "react";
import style from "./App.module.css";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import Input from "./components/Input";
function App() {
  let arr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  let arrs = [];
  const [calVal, setcalVal] = useState("0");

  const add = (a, b) => Number(a) + Number(b);
  const subs = (a, b) => Number(a) - Number(b);
  const mult = (a, b) => Number(a) * Number(b);
  const devi = (a, b) => Number(a) / Number(b);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("0");
    } else if (buttonText === "=") {
      if (calVal.includes("+")) {
        const data = add(calVal.split("+")[0], calVal.split("+")[1]);
        console.log(data);
        setcalVal(data);
      }
      if (calVal.includes("-")) {
        const data = subs(calVal.split("-")[0], calVal.split("-")[1]);
        console.log(data);
        setcalVal(data);
      }
      if (calVal.includes("*")) {
        const data = mult(calVal.split("*")[0], calVal.split("*")[1]);
        console.log(data);
        setcalVal(data);
      }
      if (calVal.includes("/")) {
        const data = devi(calVal.split("/")[0], calVal.split("/")[1]);
        console.log(data);
        setcalVal(data);
      }
      // const result = eval(calVal);
      setcalVal(result);
    } else {
      const value = calVal === "0" ? buttonText : calVal + buttonText;
      setcalVal(value);
      // console.log(value);
    }
  };
  return (
    <>
      <div className={style.outer}>
        <Input calVal={calVal}></Input>
        <ButtonContainer
          arr={arr}
          onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
