import express from 'express';
import Queue from '../lib/Queue'



export default {
    
    async store (request: express.Request, response: express.Response)  {
        const {name, email, password} = request.body

        const user = {
            name,
            email,
            password
        }

        await Queue.add(user)
       

        return response.json(user)
        
    }
}