import { useState } from 'react';

const useTarjetaTarea = (tareaInicial, onChangeEstado) => {
    const [tarea, setTarea] = useState(tareaInicial);
    const estados = ['pendiente', 'en-proceso', 'finalizado'];
    const coloresEstado = {
    pendiente: 'bg-yellow-200 border-yellow-500',
    'en-proceso': 'bg-blue-200 border-blue-500',
    finalizado: 'bg-green-200 border-green-500'
    };

    const cambiarEstado = () => {
    const indiceActual = estados.indexOf(tarea.estado);
    const nuevoIndice = (indiceActual + 1) % estados.length;
    const nuevoEstado = estados[nuevoIndice];

    setTarea(prev => ({
        ...prev,
        estado: nuevoEstado 
    }));

    if (onChangeEstado) {
        onChangeEstado(tarea.id);
    }
    };

    const eliminarTarea = () => {
    return tarea.id;
    };

    return {
    tarea,
    coloresEstado,
    cambiarEstado,
    eliminarTarea
    };
};
export default useTarjetaTarea;