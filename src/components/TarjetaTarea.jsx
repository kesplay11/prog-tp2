import useTarjetaTarea from "../hooks/useTarjetaTarea";

const TarjetaTarea = ({ tarea, onChangeEstado, onEliminar }) => {
  const { tarea: tareaActual, coloresEstado, cambiarEstado, eliminarTarea } = useTarjetaTarea(tarea, onChangeEstado);
  const color = coloresEstado[tareaActual.estado];

  return (
    <div className={`border-l-4 p-4 rounded shadow-md ${color}`}>
      <h3 className="font-bold text-lg mb-2">{tareaActual.nombre}</h3>

      <p className="text-sm mb-1">
        <span className="font-semibold">Prioridad:</span> {tareaActual.prioridad}
      </p>
      <p className="text-sm mb-4">
        <span className="font-semibold">Categoría:</span> {tareaActual.categoria}
      </p>

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={cambiarEstado}
          className="text-xs px-2 py-1 rounded border border-gray-500 hover:bg-gray-100"
        >
          Cambiar estado
        </button>
        <button
          type="button"
          onClick={() => onEliminar(eliminarTarea())}
          className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TarjetaTarea;