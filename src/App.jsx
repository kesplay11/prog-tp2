import { useState } from 'react';
import FormTarea from './components/FormTarea';
import ListadoDeTareas from './components/ListadoDeTareas';

import './App.css'
const estados = ['pendiente', 'en-proceso', 'finalizado'];

const App = () => {
  const [tareas, setTareas] = useState([]);


  const agregarTarea = (nuevaTarea) => {
    setTareas([
      ...tareas,
      {
        ...nuevaTarea,
        id: Date.now(), 
        estado: 'pendiente' 
      }
    ]);
  };


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


  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };


  return (
    <div >
      <h1 className="text-3xl font-bold text-center mb-6">Gestor de Tareas</h1>
      {/*al componente FormTarea le pasamos la funcion agregar como una prop llamada onAgregarTarea*/}
      { <div className="max-w-xl mx-auto mb-8">
        <FormTarea onAgregarTarea={agregarTarea} />
      </div> }
      {/*al compontente del listado le pasamos el estado tareas para que las peuda renderizar, y para que las tarjetas generadas tengan mas funciones le paso¿amos las funciones para que cambien de estado y se elimine del estado, osea se eliminen */}
      { <ListadoDeTareas
        tareas={tareas}
        onChangeEstado={cambiarEstadoTarea}
        onEliminar={eliminarTarea}
      /> }
    </div>
  );
};

export default App;