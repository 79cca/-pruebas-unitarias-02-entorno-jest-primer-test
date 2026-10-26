// Definimos cómo debe ser una tarea
export type Tarea = {
    id: number;
    titulo: string;
    descripcion: string;
    completada: boolean;
  };
  
  // Almacenamiento temporal de tareas
  const tareas: Tarea[] = [
    {
      id: 1,
      titulo: "Estudiar pruebas",
      descripcion: "Aprender a utilizar Jest y Supertest",
      completada: false
    },
    {
      id: 2,
      titulo: "Hacer ejercicio",
      descripcion: "Realizar actividad física",
      completada: true
    }
  ];
  
  // Obtener todas las tareas
  export function obtenerTodasLasTareas(): Tarea[] {
    return tareas;
  }
  
  // Crear una nueva tarea
  export function crearTarea(
    datos: Omit<Tarea, "id">
  ): Tarea {
    const nuevaTarea: Tarea = {
      id: Math.max(0, ...tareas.map(tarea => tarea.id)) + 1,
      ...datos
    };
  
    tareas.push(nuevaTarea);
  
    return nuevaTarea;
  }