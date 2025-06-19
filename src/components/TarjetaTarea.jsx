const TarjetaTarea = ({tarea, onChangeEstado, onEliminar}) => {
    const coloresEstado ={
        pendiente: 'bg-yellow-200 border-yellow-500',
        'en-proceso': 'bg-blue-200 border-blue-500',
        finalizado: 'bg-green-200 border-green-500'
    };

    return (
        <div className={`border-l-4 p-4 rounded shadow-md ${coloresEstado[tarea.estado]}`}>
            <h3 className="font-bold text-lg mb-2">{tarea.nombre}</h3>

        <p className="text-sm mb-1">
            <span className="font-semibold">Prioridad:</span> {tarea.prioridad}
        </p>
        <p className="text-sm mb-4">
            <span className="font-semibold">Categoria: </span> {tarea.categoria}
        </p>

        <div className="flex justify-between items-center">
            <button
                onClick={onChangeEstado}
                className="text-xs px-2 py-1 rounded border border-gray-500 hover:bg-gray-100"
            >
                Cambiar de estado
            </button>
            <button
                onClick={onEliminar}
                className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Eliminar    
            </button>
        </div>
        </div>
    );
};

export default TarjetaTarea;