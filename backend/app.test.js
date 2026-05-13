const request = require("supertest");
const app = require("./app");

describe("SERP backend", () => {
  test("GET / returns backend status text", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Backend funcionando");
  });

  test("GET /health returns ok status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });
});
