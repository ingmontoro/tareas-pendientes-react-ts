import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])
    const [pendientes, setPendientes] = useState<number>(0)
    const [tareasSeleccionadas, setTareasSeleccionadas] = useState<number[]>([])

    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return
        setListaTareas(tareasAnteriores => {
            const nuevasTareas = [...tareasAnteriores, nuevaTarea]
            setPendientes(nuevasTareas.length)
            return nuevasTareas
        })
        setNuevaTarea('')
    }

    const handledDeleteTask = (index: number) => {
        setListaTareas(tareas => {
            const nuevasTareas = tareas.filter((_, i) => i !== index)
            setPendientes(nuevasTareas.length)
            return nuevasTareas
        })
    }

    const handledDeleteTasks = () => {
        if (confirm('Seguro quieres borrar todo')) {
            setListaTareas([])
            setPendientes(0)
        }
    }

    const handledDeleteSelectedTasks = () => {
        setListaTareas(tareas => {
            const nuevasTareas = tareas.filter((_, i) => !tareasSeleccionadas.includes(i))
            setPendientes(nuevasTareas.length)
            setTareasSeleccionadas([]) // Limpiar las tareas seleccionadas después de eliminarlas
            return nuevasTareas
        })
    }

    const toggleTareaSeleccionada = (index: number) => {
        setTareasSeleccionadas(tareasSeleccionadas => {
            if (tareasSeleccionadas.includes(index)) { //checked
                return tareasSeleccionadas.filter(i => i !== index)
            } else {
                return [...tareasSeleccionadas, index]
            }
        })
    }

    return (
        <div>
            <h1>Lista de tareas</h1>
            <div className="flex">
                <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Nueva tarea"
                />
                <div>
                    {pendientes} tareas pendientes
                </div>
                <br></br>
                <div>
                    <button onClick={handleAddTask}>Agregar Tarea</button>
                    <button onClick={handledDeleteTasks}>Borrar Tareas</button>
                    <button onClick={handledDeleteSelectedTasks}>Borrar Seleccionadas</button>
                </div>
            </div>
            <ListaTareas tareasSeleccionadas={tareasSeleccionadas} listaTareas={listaTareas} borrarTarea={handledDeleteTask} toggleTareaSeleccionada={toggleTareaSeleccionada}></ListaTareas>
        </div>
    )
}