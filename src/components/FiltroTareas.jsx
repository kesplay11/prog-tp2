const FiltroTareas = ({ categorias, categoriaSeleccionada, onChangeCategoria}) => {
    return (
        <div className="mb-4">
            <label htmlFor="filtro-categoria" className="block text-sm font-medium mb-2">
                Filtrar por categoría:
            </label>
            <select 
            id="filtro-categoria"
            value={categoriaSeleccionada}
            onChange={(e)=> onChangeCategoria(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            >
                {categorias.map((categoria) => (
                    <option
                    key={categoria}
                    value={categoria}>
                        {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FiltroTareas;