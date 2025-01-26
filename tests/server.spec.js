const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  // 1. Testear que la ruta GET /cafes devuelve un status code 200 y un array con al menos 1 objeto
  it("GET /cafes devuelve un status code 200 y un array con al menos un objeto", async () => {
    const response = await request(server).get("/cafes").send();
    expect(response.statusCode).toBe(200); // Verificar el status code
    expect(response.body).toBeInstanceOf(Array); // Verificar que sea un array
    expect(response.body.length).toBeGreaterThan(0); // Verificar que haya al menos 1 objeto
  });

  // 2. Comprobar que se obtiene un código 404 al intentar eliminar un café con un id inexistente
  it("DELETE /cafes/:id con un id inexistente devuelve un status code 404", async () => {
    const response = await request(server)
      .delete("/cafes/9999")
      .set("Authorization", "token"); // Se incluye un token para evitar el status 400
    expect(response.statusCode).toBe(404); // Verificar el status code
    expect(response.body.message).toBe("No se encontró ningún cafe con ese id"); // Verificar el mensaje de error
  });

  // 3. Probar que la ruta POST /cafes agrega un nuevo café y devuelve un código 201
  it("POST /cafes agrega un nuevo café y devuelve un status code 201", async () => {
    const nuevoCafe = { id: 5, nombre: "Latte" };
    const response = await request(server).post("/cafes").send(nuevoCafe);
    expect(response.statusCode).toBe(201); // Verificar el status code
    expect(response.body).toContainEqual(nuevoCafe); // Verificar que el café se haya agregado
  });

  // 4. Probar que la ruta PUT /cafes devuelve un status code 400 si el id en los parámetros no coincide con el del payload
  it("PUT /cafes/:id devuelve un status code 400 si los ids no coinciden", async () => {
    const cafeActualizado = { id: 6, nombre: "Espresso" };
    const response = await request(server).put("/cafes/1").send(cafeActualizado);
    expect(response.statusCode).toBe(400); // Verificar el status code
    expect(response.body.message).toBe(
      "El id del parámetro no coincide con el id del café recibido"
    ); // Verifica el mensaje de error
  });
});
