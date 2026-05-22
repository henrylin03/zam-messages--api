import usersRouter from "@/routers/users";
import express from "express";
import request from "supertest";
import { describe, expect, test } from "@jest/globals";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/users", usersRouter);

test("hello", () => {
  expect(1 + 2).toBe(3);
});
