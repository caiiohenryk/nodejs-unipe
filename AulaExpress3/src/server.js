import express from 'express';
import UserRoutes from './router/UserRoutes.js';

const server = express();
const port = 5000;

server.use(UserRoutes);

server.listen(port, () => {
    console.log(`Servidor rodando no PORT ${port}`);
});