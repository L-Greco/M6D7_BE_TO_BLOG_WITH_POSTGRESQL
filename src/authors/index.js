import { Router } from "express";

import Model from "../utils/model/index.js";

const authorsRouter = Router()

const authors = new Model("authors", "author_id")

authorsRouter.get("/", async (req, res, next) => {
    try {
        const dbRes = await authors.find(req.query)
        res.send(dbRes)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

authorsRouter.get("/:id", async (req, res, next) => {
    try {
        const dbResponse = await authors.findById(req.params.id);
        res.send(dbResponse);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

authorsRouter.put("/:id", async (req, res, next) => {
    try {
        const dbResponse = await authors.update(req.params.id, req.body);
        res.send(dbResponse);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

authorsRouter.post("/", async (req, res, next) => {
    try {
        const dbResponse = await authors.create(req.body);
        res.send(dbResponse);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

authorsRouter.delete("/:id", async (req, res, next) => {
    try {
        const dbResponse = await authors.deleteById(req.params.id);
        res.status(204).send(dbResponse);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

export default authorsRouter