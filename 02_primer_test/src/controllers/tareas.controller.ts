import { Request, Response } from "express";

// Lista inicial de tareas
const tareas = [
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

// GET /tareas - Consultar todas las tareas
export function obtenerTareas(req: Request, res: Response) {
  res.json(tareas);
}

// POST /tareas - Crear una nueva tarea
export function crearTarea(req: Request, res: Response) {
  const { titulo, descripcion } = req.body;

  // Validar que los campos sean correctos
  if (
    typeof titulo !== "string" ||
    typeof descripcion !== "string" ||
    !titulo.trim() ||
    !descripcion.trim()
  ) {
    return res.status(400).json({
      mensaje: "El titulo y la descripcion son obligatorios"
    });
  }

  // Crear la nueva tarea
  const nuevaTarea = {
    id: Math.max(0, ...tareas.map(tarea => tarea.id)) + 1,
    titulo,
    descripcion,
    completada: false
  };

  // Agregar la tarea a la lista
  tareas.push(nuevaTarea);

  // Confirmar que la tarea fue creada
  return res.status(201).json(nuevaTarea);
}