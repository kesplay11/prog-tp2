import { useState } from "react";
import FiltroTareas from './FiltroTareas';
import TarjetaTarea from './TarjetaTarea';

const ListadoDeTareas = ({tareas, onChangeEstado, onEliminar}) =>{
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');

    const categorias = ['todas', 'trabajo', 'personal', 'estudio', 'general']

    const prioridadNumerica = {
        alta:3,
        media:2,
        baja:1
    }

    const tareasFiltradas = categoriaSeleccionada === 'todas'
    ? tareas
    :tareas.filter(tarea => tarea.categoria === categoriaSeleccionada)
    console.log(tareas);

    const tareasOrdenadas = [...tareasFiltradas].sort((a,b) => {
        return prioridadNumerica[b.prioridad] - prioridadNumerica[a.prioridad];
    });


    return(
        <div className="max-w-4xl mx-auto">
        {/* Componente de filtro */}
        <FiltroTareas
            categorias={categorias}
            categoriaSeleccionada={categoriaSeleccionada}
            onChangeCategoria={setCategoriaSeleccionada}
        />

        {/* Lista de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {tareasOrdenadas.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center py-4">
                No hay tareas disponibles :).
            </p>
            ) : (
            tareasOrdenadas.map((tarea) => (
                <TarjetaTarea
                key={tarea.id}
                tarea={tarea}
                onChangeEstado={() => onChangeEstado(tarea.id)}
                onEliminar={() => onEliminar(tarea.id)}
                />
            ))
            )}
        </div>
        </div>
    );
};

export default ListadoDeTareas;