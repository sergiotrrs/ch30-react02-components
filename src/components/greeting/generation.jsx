import Student from "../student/student";
import studentsInfo from "../student/students-info";

/*
 Las props (propiedades) son un mecanismo para pasar datos
 de un componente padre a un componente hijo.
 Las props son unidireccionales.

*/

export default function Generation() {
  return (
    <>
      <h2>Generation</h2>
      <p>
        En <em>Generation</em> aprendí con pasión, Java Dev Jr. fue mi canción.
        Bootcamp brillante, conocimientos al alza,
        <strong>Generation MX</strong>, ¡mi ruta en casa!
      </p>
      <h4 id="subtitle"> Participantes</h4>
       { studentsInfo.map(  studentInfo => <Student info={studentInfo} />   ) }
    </>
  );
}
