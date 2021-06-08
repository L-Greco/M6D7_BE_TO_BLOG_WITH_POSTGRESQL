import { Router } from "express";

import Model from "../utils/model/index.js";

const blogsRouter = Router()

const Blogs = new Model("blogs", "blog_id")

blogsRouter.get("/", async (req, res, next) => {
    try {
        const dbRes = await Blogs.find(req.query)
        res.send(dbRes)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

blogsRouter.get("/:id", async (req, res, next) => {
    try {
        const dbResponse = await Blogs.findById(req.params.id);
        res.send(dbResponse);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

blogsRouter.put("/:id", async (req, res, next) => {
    try {
        const dbResponse = await Blogs.update(req.params.id, req.body);
        res.send(dbResponse);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

blogsRouter.post("/", async (req, res, next) => {
    try {
        const dbResponse = await Blogs.create(req.body);
        res.send(dbResponse);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

blogsRouter.delete("/:id", async (req, res, next) => {
    try {
        const dbResponse = await Blogs.deleteById(req.params.id);
        res.status(204).send(dbResponse);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

export default blogsRouter