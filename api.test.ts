import { describe, it, expect } from "bun:test";
import request from "supertest";
import app from "./app";

describe("POST /send", () => {
  it("should return 200 and message", async () => {
    const res = await request(app)
      .post("/send")
      .send({ name: "shan" });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      "Your name is ": "shan",
    });
  });

});