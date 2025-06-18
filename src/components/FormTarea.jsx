import { useState } from 'react';

const FormTarea = ({ onAgregarTarea }) => {

    const [nombre, setNombre] = useState('');
    const [prioridad, setPrioridad] = useState('media');
    const [categoria, setCategoria] = useState('general');


    const opcionesPrioridad = ['alta', 'media', 'baja'];
    const opcionesCategoria = ['trabajo', 'pesonal', 'estudio', 'general'];

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!nombre.trim()){
            alert('Porfavor, ingresa un nombre para la tarea')
            return
        }

        onAgregarTarea({
            nombre,
            prioridad,
            categoria
        });

        setNombre('');
        setPrioridad('media');
    }

    return (
        <form onSubmit={handleSubmit} className=''>
            <h2 className=''>Nueva Tarea</h2>

        {/* campo nombre*/}
        <div>
            <label htmlFor="">Nombre</label>
            <input 
            type="text" 
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>

        {/* campo prioridad */}
        <div>
            <label >prioridad:</label>
            <select 
                id="prioridad"
                value={prioridad}
                onChange = {(e) => setPrioridad(e.target.value)}

            >
                {opcionesPrioridad.map((prio)=>(
                    <option key={prio} value={prio}>
                        {prio.charAt(0).toUpperCase() + prio.slice(1)}
                    </option>
                ))}
            </select>
        </div>

        {/* campo categoria*/ }
        <div>
            <label >Categoria: </label>
            <select 
            id="categoria"
            value={categoria}
            onChange = {(e)=> setCategoria(e.target.value)}
            >
                {opcionesCategoria.map((cat)=>(
                    <option
                        key={cat}
                        value={cat}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                ))}
            </select>
        </div>

        {/* Boton para enviar la tarea */}
        <button 
        type='submit'>
            agregar tarea
        </button>
        </form>
    )

};

export default FormTarea;