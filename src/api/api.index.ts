
import express from "express";
import generateRoute from "../routes/generate.route";

const router = express.Router();


router.use("/generate", generateRoute);


export default router;