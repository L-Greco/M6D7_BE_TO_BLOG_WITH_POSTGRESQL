import express from "express";
import blogsRouter from "./blogPosts/index.js";
import authorsRouter from "./authors/index.js";
const { PORT } = process.env

const server = express()

server.use(express.json())

server.use("/blogs", blogsRouter)
server.use("/authors", authorsRouter)


server.listen(PORT, () => console.log("Server is listening on :", PORT))
server.on("error", (err) => console.log("server is not running", err))