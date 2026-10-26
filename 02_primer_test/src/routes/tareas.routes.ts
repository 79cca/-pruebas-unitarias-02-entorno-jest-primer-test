import express from "express";
import {
  obtenerTareas,
  crearTarea
} from "../controllers/tareas.controller";

const router = express.Router();

// Consultar todas las tareas
router.get("/tareas", obtenerTareas);

// Crear una nueva tarea
router.post("/tareas", crearTarea);

export default router;