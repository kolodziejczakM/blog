import express, { Request } from 'express';

const app = express();
const server = app.listen(process.env.PORT || 4002);

app.get('/', (req, res) => {
    res.send('PAGE UNDER CONSTRUCTION');
});
