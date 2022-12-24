import express from "express"
import { generateSpecFile } from "../controller/generate.cotroller"


const router = express.Router()


router.post('/', generateSpecFile)


export default router;