import { useState } from 'react';
import { MyButton } from '../button/my-button';

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

  return (
    <>
      <p>Contador: {counterValue}</p>
      <MyButton onClick={ handleDecrement } >Decrementar</MyButton>
      <MyButton onClick={ handleIncrement } >Incrementar</MyButton>
      <MyButton onClick={ (event) => setCounter( 100  ) }>Reset</MyButton>

      {/* <button onClick={ handleDecrement } > Decrementar</button>
      <button onClick={ handleIncrement } > Incrementar</button>
      <button onClick={ (event) => setCounter( 100  ) } > Reset</button> */}
     
    </>
  );
};
