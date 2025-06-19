import { useState } from "react";
import FiltroTareas from './FiltroTareas';
import TarjetaTarea from './TarjetaTarea';

const ListadoDeTareas = ({tareas, onchangeEstado, onEliminar}) =>{
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');

    const categorias = ['todas', 'trabajo', 'pesonal', 'estudio', 'general']

    const prioridadNumerica = {
        alta:3,
        media:2,
        baja:1
    }

    const tareasFiltradas = categoriaSeleccionada === 'todas'
    ? tareas
    :tareas.filter(tarea => tarea.categoria === categoriaSeleccionada);

    const tareasOrdenadas = [...tareasFiltradas].sort((a,b) => {
        return prioridadNumerica[b.prioridad] - prioridadNumerica[a.prioridad];
    });


    return(
        <div>
            {/**Componente filtro */}
            <FiltroTareas
                categorias={categorias}
                categoriaSeleccionada={categoriaSeleccionada}
                onChangeCategoria={setCategoriaSeleccionada}
            />
            {/**Lista de Tarjetas */}
            <div>
                {tareasOrdenadas.length === 0 ?(
                    <p>
                        No hay tareas disponilbes.
                    </p>
                ) : (
                    tareasOrdenadas.map((tarea) => (
                        <TarjetaTarea
                            key={tarea.id}
                            tarea={tarea}
                            onchangeEstado={() => onchangeEstado(tarea.id)}
                            onEliminar={() => onEliminar(tarea.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ListadoDeTareas;