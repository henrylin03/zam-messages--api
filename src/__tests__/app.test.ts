import usersRouter from "../routers/users";
import express from "express";
import request from "supertest";
import { test } from "@jest/globals";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/users", usersRouter);

test("Users router works", (done) => {
  request(app)
    .get("/users")
    .expect("Content-Type", /json/)
    .expect({ msg: "hello user" })
    .expect(200, done);
});
