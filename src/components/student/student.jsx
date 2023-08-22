import React from "react";

const studentName = "Tania";

/*
 Los datos pasados como props, los recibimos como 
 un objeto en un parámetro de la función
*/
const Student = (props) => {
  console.log(props);
  return (
    <>
      <a href={props.url} target="_blank">
        <h4> {props.name} </h4>
      </a>
      <p> Ex-alumno:{props.isGraduate? " Sí " : " No "}   </p>

    </>
  );
};

export default Student;
