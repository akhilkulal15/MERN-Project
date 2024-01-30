import express from 'express';
import router from './backend/routes/routes.js';
import connectDB from './backend/database/db.js';
const app = express();
connectDB();
app.use('/api/topics',router);

const port = process.env.PORT||6001;

console.log(port)
app.listen(port,console.log(`Listening on PORT ${port}`))