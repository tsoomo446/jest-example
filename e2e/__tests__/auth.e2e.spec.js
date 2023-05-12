import request from "supertest";
import { connectDB, closeDB, dropDB } from "./dbConfig.js";
import app from "../app.js";
import { getJwtToken } from "../utils/helpers.js";
import mongoose from "mongoose";

describe("auth - e2e tests", () => {
    beforeAll(async () => await connectDB());
    afterEach(async () => await dropDB());
    afterAll(async () => await closeDB());

    it("should reject when input is invalid", async () => {
        const res = await request(app).post("/api/v1/login").send({ email: "tsoomoo446@gmail.com", name: "asdf" });
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("Please enter email and password")
    })
})