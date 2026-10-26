import { Request, Response } from "express";

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

export function obtenerTareas(req: Request, res: Response) {
  res.json(tareas);
}
