import useTarea from "../hooks/useTarea";
import { useState } from "react";

const FormTareas = ({onAgregarTarea}) => {
    const [formulario, setDato, limpiarForm] = useTarea()
    const [error, setError] = useState('');
    const prioridades = ["alta", "media", "baja"];
    const categorias = ["trabajo", "personal", "estudio", "general"];

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(!formulario.nombre.trim()){
            setError("te falto el nombre de la tarea crack")
            return;
        }

        onAgregarTarea(formulario);
        
        limpiarForm();
        setError('');
    }

    return(
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
            <h2>Nueva Tarea</h2>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text"id="nombre" value={formulario.nombre}  onChange={(e) => setDato("nombre", e.target.value)} placeholder="acá va la tarea cracj"/>
                {error && <p className="text-red">{error}</p>}
            </div>
            <div>
                <label htmlFor="prioridad">Prioridad:</label>
                <select name="" id="prioridad" value={formulario.prioridad} onChange={(e) => setDato("prioridad", e.target.value)}>
                    {prioridades.map((prio)=>(
                        <option key={prio} value={prio}>{prio.charAt(0).toUpperCase() + prio.slice(1)}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="categoria">Prioridad:</label>
                <select name="" id="categoria" value={formulario.categoria} onChange={(e) => setDato("categoria", e.target.value)}>
                    {categorias.map((cat)=>(
                        <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Agrega tarea</button>
        </form>
    )
}

const FormTarea = ({ onAgregarTarea }) => {
    
    const [formulario, setDato, limpiarForm] = useTarea();
    const [error, setError] = useState("");
    const prioridades = ["alta", "media", "baja"];
    const categorias = ["trabajo", "personal", "estudio", "general"];

const handleSubmit = (e) => {
    e.preventDefault();

    if (!formulario.nombre.trim()) {
    setError("Te falto el nombre de la tarea crack. PD: es obligatorio");
    return;
    }
    // Llamamos la función del padre (App)
    onAgregarTarea(formulario);
    // Limpiamos el formulario
    limpiarForm();
    setError("");
};
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
        value={formulario.nombre}
        onChange={(e) => setDato("nombre", e.target.value)}
        placeholder="Acá va la atarea crack"
        className="w-full px-3 py-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>

    {/* Campo Prioridad */}
    <div className="mb-3">
        <label className="block text-sm font-medium mb-1" htmlFor="prioridad">
        Prioridad:
        </label>
        <select
        id="prioridad"
        value={formulario.prioridad}
        onChange={(e) => setDato("prioridad", e.target.value)}
        className="w-full px-3 py-2 border rounded"
        >
        {prioridades.map((prio) => (
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
        value={formulario.categoria}
        onChange={(e) => setDato("categoria", e.target.value)}
        className="w-full px-3 py-2 border rounded"
        >
        {categorias.map((cat) => (
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