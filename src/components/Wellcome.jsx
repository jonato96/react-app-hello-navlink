const Wellcome = () =>{
    const info = {
        nombre: "Jonathan",
        apellido: "Sanchez",
        edad: 26
      }
    return(
        <>
            <h1>Hello, my name is {info.nombre} and my lastname is {info.apellido}</h1>
            <h2>My age is {info["edad"]}</h2>
        </>      
    )
}
export default Wellcome