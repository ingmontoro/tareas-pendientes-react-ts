import { Tarea } from "./Tarea"

type ListaTareas = {
    tareasSeleccionadas: number[]
    listaTareas: string[]
    borrarTarea: (index: number) => void
    toggleTareaSeleccionada: (index: number) => void
}

export const ListaTareas = ({tareasSeleccionadas, listaTareas, borrarTarea, toggleTareaSeleccionada}: ListaTareas) => {
  return (
    <div className="taskList">{
            listaTareas.map(
                (tarea, index) => (
                    <Tarea key={index} tareaId={index} tarea={tarea} borrarTarea={() => borrarTarea(index)} toggleTareaSeleccionada={() => toggleTareaSeleccionada(index)} tareasSeleccionadas={tareasSeleccionadas}></Tarea>
                )
            )
        }
    </div>
  )
}