import React from "react";

const studentName = "Tania";

/*
 Los datos pasados como props, los recibimos como 
 un objeto en un parámetro de la función


 Desestructuración: Obtener las claves de un objeto, para
 hacer asignaciones menos complejas.

 { name, url} = props;

*/
const Student = ( { info, children } ) => {
  
  return (
    <>
      <a href={ info.url } target="_blank">
        <h4> { info.name } </h4>
      </a>
      <p> Ex-alumno:{ info.isGraduate ? " Sí " : " No "}   </p>
      <p>{ children }</p>
    </>
  );
};

export default Student;
