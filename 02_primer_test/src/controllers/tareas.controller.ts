import { Request, Response } from "express";

import {
  obtenerTodasLasTareas,
  crearTarea as crearTareaServicio
} from "../services/tareas.service";

// GET /tareas
export function obtenerTareas(
  req: Request,
  res: Response
): void {
  const tareas = obtenerTodasLasTareas();

  res.json(tareas);
}

// POST /tareas
export function crearTarea(
  req: Request,
  res: Response
): void {
  const { titulo, descripcion } = req.body;

  // Validar los datos recibidos
  if (
    typeof titulo !== "string" ||
    typeof descripcion !== "string" ||
    !titulo.trim() ||
    !descripcion.trim()
  ) {
    res.status(400).json({
      mensaje: "El titulo y la descripcion son obligatorios"
    });
    return;
  }

  // El servicio se encarga de crear la tarea
  const nuevaTarea = crearTareaServicio({
    titulo,
    descripcion,
    completada: false
  });

  // El controlador devuelve la respuesta HTTP
  res.status(201).json(nuevaTarea);
}