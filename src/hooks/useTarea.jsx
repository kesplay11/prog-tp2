import { useState } from "react";

export default function useTarea() {
const [nombre, setNombre] = useState("");
const [prioridad, setPrioridad] = useState("media");
const [categoria, setCategoria] = useState("general");

const setDato = (campo, valor) => {
    switch (campo) {
    case "nombre":
        setNombre(valor);
        break;
    case "prioridad":
        setPrioridad(valor);
        break;
    case "categoria":
        setCategoria(valor);
        break;
    default:
        break;
    }
};

const limpiarForm = () => {
    setNombre("");
    setPrioridad("media");
    setCategoria("general");
};

return [{ nombre, prioridad, categoria }, setDato, limpiarForm];
}