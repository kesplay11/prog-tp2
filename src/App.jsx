import { useState } from 'react';
import FormTarea from './components/FormTarea';
import ListadoDeTareas from './components/ListadoDeTareas';

import './App.css'

const App = () => {
  // Estado global de las tareas
  const [tareas, setTareas] = useState([]);

  // Estados posibles de una tarea
  const estados = ['pendiente', 'en-proceso', 'finalizado'];

  // Función para agregar nueva tarea
  const agregarTarea = (nuevaTarea) => {
    setTareas([
      ...tareas,
      {
        ...nuevaTarea,
        id: Date.now(), // ID único basado en la fecha
        estado: 'pendiente' // Estado inicial
      }
    ]);
  };

  // Función para cambiar el estado de una tarea
  const cambiarEstadoTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? {
              ...tarea,
              estado:
                estados[(estados.indexOf(tarea.estado) + 1) % estados.length]
            }
          : tarea
      )
    );
  };

  // Función para eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div >
      <h1 className="text-3xl font-bold text-center mb-6">Gestor de Tareas</h1>
      { <div className="max-w-xl mx-auto mb-8">
        <FormTarea onAgregarTarea={agregarTarea} />
      </div> }
      { <ListadoDeTareas
        tareas={tareas}
        onChangeEstado={cambiarEstadoTarea}
        onEliminar={eliminarTarea}
      /> }
    </div>
  );
};

export default App;