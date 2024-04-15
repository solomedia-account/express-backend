import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
const app = express();
const port = 5005;

app.use(bodyParser.json());

app.use('/users', userRoutes);





app.get('/', (req, res)=>{
    console.log('[TEST]');

    res.send("HELLO YOU ARE USING THE HOMEPAGE");
})
app.listen(port, ()=> console.log(`The express and Node server is running on port: http://localhost:${port}!`));