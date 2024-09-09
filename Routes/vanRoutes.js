
import express from 'express';
import { create } from '../Controller/vansController.js';
import { deleteVan, update, fetch } from '../Controller/vansController.js';
import upload from '../Middleware.js';


const route = express.Router();

route.get("/fetch", fetch);
route.post("/create", upload.single('image'), create);
route.put('/update/:id', upload.single('image'), update);
route.delete('/delete/:id', deleteVan);

export default route;

