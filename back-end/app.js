import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import routerProduct from './src/routers/product';
import routerAuth from './src/routers/auth';
import routerCategory from './src/routers/category'
import mongoose from 'mongoose';



const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routerProduct);
app.use("/api", routerAuth);
app.use("/api", routetCategory);

mongoose.connect('mongodb://localhost:27017/', () => {
    console.log('successfully');
}
);
