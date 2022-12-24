import express from "express";
import morgan from "morgan"
import helmet from "helmet";
import cors from "cors"

import api from "./api/api.index"


export const app = express();


app.use(helmet())
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: `*`,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST']
}))




app.use("/api", api)



app.listen(5000, async () => {
    console.info(`Example app listening on port ${5000}`)
})