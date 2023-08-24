

export const MyButton = ( { onClick: handleOnClick , children } ) => {
  console.log(`Estoy dentro del componente button de ${children}`);
  
  return (
    <>
       <button onClick = { handleOnClick }>{children}</button> 
    </>
  )
}
