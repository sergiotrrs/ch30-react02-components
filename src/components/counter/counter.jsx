import { useState, useEffect } from 'react';
import { MyButton } from '../button/my-button';
import './counter.css';

let maxValue = 0;

export const Counter = () => {
  console.log("Estoy dentro del componente Counter");

 //  hook useSate
 // useState permite a los componentes gestionar su propio estado.
 // const [ value, setValue  ] = useSate( initialValue );
 const [ counterValue, setCounter  ] = useState( 100 );


  const handleIncrement = ( event ) => {
    //console.log(event)
    console.log("Estoy en fnc increment");
    setCounter( counterValue + 1  );
    console.log("Contador" + counterValue)
  }

  const handleDecrement = ( e ) => {
    //console.log(e);
    console.log("Estoy en la fnc decrement");
    setCounter( counterValue - 1  );
    console.log("Contador" + counterValue)
  }

  if ( counterValue === 90 )
    maxValue = 90;
 

  useEffect(() => {
    console.log(`Estoy dentro del useEffect de button`);
    console.log("Has llegado al máximo valor");
  }, [maxValue] );

  return (
    <>
      <p>Contador: {counterValue}</p>
      <MyButton onClick={ handleDecrement } >Decrementar</MyButton>
      <MyButton onClick={ handleIncrement } >Incrementar</MyButton>
      <MyButton onClick={ (event) => setCounter( 100  ) }>Reset</MyButton>
     
    </>
  );
};
