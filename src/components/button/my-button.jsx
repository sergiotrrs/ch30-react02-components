import { useEffect } from "react";

const buttonStyle = {
  color: "red",
  fontFamily: "verdana",
  fontSize: 18,
};
// Se puede llamar un hoja JSON->obj.
// JSON styling.

const resetStyle = {
  color: "green",
  fontFamily: "calibri",
  fontSize: 24,
};

export const MyButton = ({ onClick: handleOnClick, children, className }) => {
  console.log(`Estoy dentro del componente button de ${children}`);

  /*
     el hook useEffect es utilizado para trabajar con efectos secuendarios enm
     componentes funcionales.

     Podemos controlar las acciones que ocurren después de que el componente se renderiza,
     como realizar llamadas a APIs, suscripciones a eventos, manipulación del DOM.

     useEffect( ()=> , [] );

    */
  const maxValue = 0;

  useEffect(() => console.log(new Date().toString()), []);

  useEffect(() => {
    console.log(`Estoy dentro del useEffect de ${children}`);
  }, []);

  return (
    <>
      <div className={className}>
        <button
          onClick={handleOnClick}
          style={children === "Reset" ? resetStyle : buttonStyle}
        >
          {children}
        </button>
      </div>
    </>
  );
};
