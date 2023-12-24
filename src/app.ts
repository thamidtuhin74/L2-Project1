// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applicstion route

app.use('/api/v1/students', StudentRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('👋Hello From Project 1 !');
});

export default app;
