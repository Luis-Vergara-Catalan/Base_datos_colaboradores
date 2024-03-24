import React from 'react'
import {useState} from 'react' 

function Buscador({colaboradores, setColaboradores}) {
  const [buscar, setBuscar] = useState('')
  const handleChange = (e)=>{
    let valor = e.target.value;
    setBuscar(valor);

    let filtrados = colaboradores.filter((colaborador)=>{
      if(
      colaborador.nombre.toLowerCase().includes(valor) ||
      colaborador.correo.toLowerCase().includes(valor) ||
      colaborador.edad.toLowerCase().includes(valor) ||
      colaborador.cargo.toLowerCase().includes(valor) ||
      colaborador.telefono.toLowerCase().includes(valor) 
      ){
        return colaborador;
      }
    })
    
  if(buscar !== '' && filtrados.length > 0 ){
      setColaboradores(filtrados)
  } else{
    setColaboradores(colaboradores)
  }
  

  }
 
  return (
    <>
    <h2>Lista de colaboradores</h2>
     <form className="d-flex" role="search">
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Buscar Colaborador" 
        aria-label="Search"
        value={buscar}
        onChange={handleChange}
        />
      </form>
    </>
  )
}

export default Buscador