type Tarea = {
    tarea: string
    tareaId: number
    borrarTarea: () => void
    toggleTareaSeleccionada: () => void
    tareasSeleccionadas: number[]
}

export const Tarea = ({tarea, tareaId, borrarTarea, toggleTareaSeleccionada, tareasSeleccionadas}: Tarea) => {
  return (
    <div className="task">
        <span>
            <input
                type="checkbox"
                onChange={toggleTareaSeleccionada}
                checked={tareasSeleccionadas.includes(tareaId)}
            />
            &nbsp;&nbsp;&nbsp;{tarea}
        </span>
        <button onClick={borrarTarea}>Borrar tarea</button>
    </div>
  )
}