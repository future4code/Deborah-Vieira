import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'

import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'

import createTask from './endpoints/createTask'
import getTaskById from './endpoints/getTaskById'



dotenv.config()



export const connection =  knex({
    client: 'mysql',
    connection:{
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        port: 3306 
    }   

})
const app = express()
// app.use(express.json())

 app.put('/users', createUser)
 app.get('/users/:id', getUserById)
 app.post('/users/edit/:id', editUser)

 app.put('/task', createTask)
 app.get('/task/:id', getTaskById)

//configuração do servidor
app.listen(3003, () => {
       console.log(`Server is running in http://localhost:3003`);
   
    });