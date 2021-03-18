import "reflect-metadata";
import "./database/index";
import express from 'express';
import route from './route';
const app = express();

app.use(express.json());

app.use(route);

app.listen(3333);

