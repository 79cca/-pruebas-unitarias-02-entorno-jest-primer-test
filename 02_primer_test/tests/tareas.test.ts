import request from "supertest";
import app from "../src/app";

describe("GET /tareas", () => {
  it("Debe responder con un arreglo de tareas", async () => {
    const response = await request(app).get("/tareas");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("titulo");
    expect(response.body[0]).toHaveProperty("completada");
    expect(response.body[0]).toHaveProperty("descripcion");
  });
});

describe("POST /tareas", () => {

  // CASO FELIZ
  it("Caso feliz: debe crear una tarea válida", async () => {
    const nuevaTarea = {
      titulo: "Estudiar Jest",
      descripcion: "Aprender pruebas automatizadas"
    };

    const response = await request(app)
      .post("/tareas")
      .send(nuevaTarea);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.titulo).toBe(nuevaTarea.titulo);
    expect(response.body.descripcion).toBe(nuevaTarea.descripcion);
    expect(response.body.completada).toBe(false);
  });

  // CASO DE ERROR
  it("Caso de error: debe rechazar una tarea sin título", async () => {
    const tareaInvalida = {
      titulo: "",
      descripcion: "Tarea sin título"
    };

    const response = await request(app)
      .post("/tareas")
      .send(tareaInvalida);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("mensaje");
  });

});