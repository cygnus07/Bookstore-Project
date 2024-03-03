import express, { request } from "express";
import {PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

//Middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) =>{
    console.log(request)
    return response.status(234).send('Welcome to Mern stack')
});

app.use('/books', booksRoute);


// app.listen(PORT, () => {
//     console.log(`App is listening to port: ${PORT}`);
// });

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database');     
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    }).catch((err) => {
        console.log(err);
    });