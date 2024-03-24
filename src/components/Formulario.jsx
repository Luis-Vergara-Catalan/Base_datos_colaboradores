import React, {useState} from 'react';



const Formulario = ({ colaboradores, setColaboradores, setAlert }) => {
    const [nuevo, setNuevo] = useState({
      nombre:'',
      correo:'',
      edad:'',
      cargo:'',
      telefono:''
    });

    const validate = (e) => {
        e.preventDefault()
        const colaborador_id ={...nuevo, id: Date.now()}
        setColaboradores([...colaboradores, colaborador_id])
        setAlert({message:'Usuario Agregado con exito', color:'success'})
    }

    const ingresoColaborador =(e)=>{
      setNuevo({...nuevo,
        [e.target.name]:e.target.value
      })

    }
    
   

    
    

return (
    <div className='container'>
      <h2>Agregar colaborador</h2>
  <form  onSubmit={validate}>
  <div className="mb-3">
    <input 
        type="text" 
        className="form-control" 
        id="InputNombre" 
        aria-describedby="Text input with checkbox" 
        placeholder="Nombre del colaborador"
        name='nombre'
        onChange={ingresoColaborador}
        value={nuevo.nombre}
        /> 
  </div>
  <div className="mb-3">
    <input 
        type="email" 
        className="form-control" 
        id="InputEmail" 
        aria-describedby="emailHelp" 
        placeholder="Email del colaborador"
        name='correo' 
        onChange={ingresoColaborador}
        value={nuevo.correo}
    /> 
  </div>
  <div className="mb-3">
    <input 
        type="text" 
        className="form-control" 
        id="InputEdad" 
        placeholder="Edad del colaborador"
        name='edad'
        onChange={ingresoColaborador}
        value={nuevo.edad}
    />
  </div>
  <div className="mb-3">
    <input 
        type="text" 
        className="form-control" 
        id="InputCargo" 
        placeholder="Cargo del colaborador"
        name='cargo' 
        onChange={ingresoColaborador}
        value={nuevo.cargo}
    />
  </div>
  <div className="mb-3">
    <input 
        type="text" 
        className="form-control" 
        id="InputFono" 
        placeholder="Teléfono del colaborador"
        name='telefono' 
        onChange={ingresoColaborador}
        value={nuevo.telefono}
    />
  </div>
  
  <button type="submit" className="btn btn-success">Agregar colaborador</button>
  </form>
</div>

  )
}
export default Formulario