import express from 'express';
import 'dotenv/config'
import UserController from './app/controllers/UserController'
const app = express();

app.use(express.json())

app.get('/', (request: express.Request, response: express.Response) => {
    response.send('API is running');
});

app.post('/users', UserController.store)

app.listen(3333, () => {
    console.log('listening on 3333')
})