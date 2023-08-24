import { useState, useEffect } from "react";
import { MyButton } from "../button/my-button";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

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
      <Box component="article" sx={{ p: 2, border: '1px dashed grey'}} >
        <Typography variant="h3" component="p" >Contador: {counterValue}</Typography>
        <div className="buttons-container">
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            color="secondary"
          >
            <Button
              onClick={handleDecrement}
              size="large"
              startIcon={<RemoveCircleOutlineIcon />}
            ></Button>
            <Button
              onClick={handleIncrement}
              size="large"
              startIcon={<AddCircleOutlineIcon />}
            ></Button>
            <Button
              onClick={(event) => setCounter(100)}
              size="large"
              endIcon={<RestartAltIcon />}
            >
              Reset
            </Button>
          </ButtonGroup>
        </div>
      </Box>
    </>
  );
};
