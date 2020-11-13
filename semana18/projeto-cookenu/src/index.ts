import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import signUp from './endpoints/signUp'
import login from './endpoints/login'

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
 app.use(express.json())

 app.post('/signup', signUp)
 app.post('/login', login)

 /* app.get('/user/profile', editUser)
 app.get('/user/:id', createTask)

 app.post('/recipe', getTaskById)
 app.get('/recipe/:id', createTask) */
 

//configuração do servidor
app.listen(3003, () => {
       console.log(`Server is running in http://localhost:3003`);
   
    });