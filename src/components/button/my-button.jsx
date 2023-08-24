import { useEffect } from "react";

export const MyButton = ({ onClick: handleOnClick, children }) => {
  console.log(`Estoy dentro del componente button de ${children}`);

  /*
     el hook useEffect es utilizado para trabajar con efectos secuendarios enm
     componentes funcionales.

     Podemos controlar las acciones que ocurren después de que el componente se renderiza,
     como realizar llamadas a APIs, suscripciones a eventos, manipulación del DOM.

     useEffect( ()=> , [] );

    */
  const maxValue = 0;
  
  useEffect(() => {
    console.log(`Estoy dentro del useEffect de ${children}`);
  }, [] );

  return (
    <>
      <button onClick={handleOnClick}>{children}</button>
    </>
  );
};
