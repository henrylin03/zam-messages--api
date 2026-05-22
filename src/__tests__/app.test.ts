import usersRouter from "@/routers/users";
import express from "express";
import request from "supertest";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/users", usersRouter);
