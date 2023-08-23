export const Counter = () => {
  console.log("Estoy dentro del componente Counter");

  let counterValue = 100;

  const handleIncrement = ( event ) => {
    //console.log(event)
    console.log("Estoy en fnc increment");
    counterValue++;
    console.log("Contador" + counterValue)
  }

  const handleDecrement = ( e ) => {
    //console.log(e);
    console.log("Estoy en la fnc decrement");
    counterValue--;
    console.log("Contador" + counterValue)
  }

  return (
    <>
      <p>Contador: {counterValue}</p>
      <button onClick={ handleDecrement } > Decrementar</button>
      <button onClick={ handleIncrement } > Incrementar</button>
      {/* Agregar botón reset */}
    </>
  );
};
