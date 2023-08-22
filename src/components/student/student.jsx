import React from "react";

const studentName = "Tania";

/*
 Los datos pasados como props, los recibimos como 
 un objeto en un parámetro de la función


 Desestructuración: Obtener las claves de un objeto, para
 hacer asignaciones menos complejas.

 { name, url} = props;

*/
const Student = ( { name, url, isGraduate } ) => {
  
  return (
    <>
      <a href={ url } target="_blank">
        <h4> { name } </h4>
      </a>
      <p> Ex-alumno:{ isGraduate ? " Sí " : " No "}   </p>

    </>
  );
};

export default Student;
