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
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Nueva Tarea</h2>

        {/* Campo Nombre */}
        <div className="mb-3">
            <label className="block text-sm font-medium mb-1" htmlFor="nombre">
            Nombre:
            </label>
            <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Estudiar React"
            className="w-full px-3 py-2 border rounded"
            />
        </div>

        {/* Campo Prioridad */}
        <div className="mb-3">
            <label className="block text-sm font-medium mb-1" htmlFor="prioridad">
            Prioridad:
            </label>
            <select
            id="prioridad"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            >
            {opcionesPrioridad.map((prio) => (
                <option key={prio} value={prio}>
                {prio.charAt(0).toUpperCase() + prio.slice(1)}
                </option>
            ))}
            </select>
        </div>

        {/* Campo Categoría */}
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="categoria">
            Categoría:
            </label>
            <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            >
            {opcionesCategoria.map((cat) => (
                <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
            ))}
            </select>
        </div>

        {/* Botón enviar */}
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
            Agregar Tarea
        </button>
        </form>
    );
};

export default FormTarea;