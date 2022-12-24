import { Request, Response } from "express";
import multer from "multer"
import jsdoc from 'express-jsdoc-swagger';
import fs from "fs"
import { Storage } from "../multer/multer.helper";
import { app } from "../server";

const upload = multer({ storage: Storage }).single('file');





export const generateSpecFile = async (req: Request, res: Response) => {

    upload(req, res, (err: any) => {
        if (err) {
            return res.status(501).json({ error: err })
        }
        const { title, description, version, url } = req.body

        const options = {
            info: {
                openapi: '3.0.0',
                title: title ?? 'API documentation',
                description: description ?? 'API documentation',
                version: version ?? '1.0.0',
            },
            servers: [{
                url: url ?? 'https://beqa.dev',
                description: ""
            }],
            baseDir: __dirname,
            filesPattern: '../../upload/*.js',
            exposeSwaggerUI: true,
            exposeApiDocs: true,
            notRequiredAsNullable: false,
            multiple: true,
        };

        const instance = jsdoc(app)(options);
        instance.on('finish', data => {
            res.send(data)
            fs.rmSync(`upload/${req.file.filename}`);
        });
    })
}