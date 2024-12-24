import request from "supertest";
import { connectDB, closeDB, dropDB } from "./dbConfig.js";
import app from "../app.js";

describe("Todos - E2E Tests", () => {
  let token;

  beforeAll(async () => await connectDB());

  afterEach(async () => await dropDB());

  beforeEach(async () => {
    const res = await request(app)
      .post("/api/v1/register")
      .send({ email: "test@gmail.com", password: "1234", name: "testname" });
    token = res.body.token;
  });

  it("should add a todo", async () => {
    const todoData = {
      title: "Test Todo",
      description: "This is a test todo",
      order: 1,
    };

    const res = await request(app)
      .post("/api/v1/todo")
      .set("Authorization", `Bearer ${token}`)
      .send(todoData);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("todo");
    expect(res.body.todo.title).toBe(todoData.title);
    expect(res.body.todo.description).toBe(todoData.description);
    expect(res.body.todo.order).toBe(todoData.order);
    expect(res.body.todo).toHaveProperty("user");
  });

  it("should fail to add a todo without required fields", async () => {
    const incompleteTodoData = {
      title: "Incomplete Todo",
    };

    const res = await request(app)
      .post("/api/v1/todo")
      .set("Authorization", `Bearer ${token}`)
      .send(incompleteTodoData);

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error", "Please enter all values");
  });

  it("should fail on incorrect password login", async () => {
    const registerBody = {
      email: "test@gmail.com",
      password: "12345",
    };

    const res = await request(app).post("/api/v1/login").send(registerBody);
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("error", "Invalid password");
  });

  it("should send token on correct login", async () => {
    const loginBody = {
      email: "test@gmail.com",
      password: "1234",
    };
    const res = await request(app).post("/api/v1/login").send(loginBody);
    expect(res.statusCode).toBe(200);
  });

  afterAll(async () => await closeDB());
});
