import { useState, useEffect } from "react";
import { MyButton } from "../button/my-button";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

let maxValue = 0;

export const Counter = () => {
  console.log("Estoy dentro del componente Counter");

  //  hook useSate
  // useState permite a los componentes gestionar su propio estado.
  // const [ value, setValue  ] = useSate( initialValue );
  const [counterValue, setCounter] = useState(100);

  const handleIncrement = (event) => {
    //console.log(event)
    console.log("Estoy en fnc increment");
    setCounter(counterValue + 1);
    console.log("Contador" + counterValue);
  };

  const handleDecrement = (e) => {
    //console.log(e);
    console.log("Estoy en la fnc decrement");
    setCounter(counterValue - 1);
    console.log("Contador" + counterValue);
  };

  if (counterValue === 90) maxValue = 90;

  useEffect(() => {
    console.log(`Estoy dentro del useEffect de button`);
    console.log("Has llegado al máximo valor");
  }, [maxValue]);

  return (
    <>
      <p className="title-counter">Contador: {counterValue}</p>
      <div className="buttons-container">
        <ButtonGroup
          variant="outlined" 
          aria-label="outlined button group"
          color="secondary"          
        >
          <Button size="large">One</Button>
          <Button size="large">Two</Button>
          <Button size="large">Three</Button>
        </ButtonGroup>

        {/*  <MyButton className="button-decrement" onClick={handleDecrement}>Decrementar</MyButton>
        <MyButton className="button-increment" onClick={handleIncrement}>Incrementar</MyButton>
        <MyButton className="button-reset"onClick={(event) => setCounter(100)}>Reset</MyButton>
       */}
      </div>
    </>
  );
};
