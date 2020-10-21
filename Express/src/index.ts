//sempre que criar um projeto novo é isso
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {countries, country} from './countries'

//Tipando a variavel app do express
const app: Express = express()

//midleware para converter 
app.use(express.json())
app.use(cors())



//requisição Endpoint 1
app.get("/countries/all", (req:Request, res:Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name

    }))
    res.status(200).send(result)
})


//requisição Endpoint 2
app.get("/countries/:id", (req:Request, res:Response) => {
    const result: country | undefined = countries.find(
        country =>  country.id === Number(req.params.id)
    )
        if(result) {
            res.status(200).send(result)
        }else{
            res.status(404).send("Not Found")
        }
        
})

//requisição Endpoint 3
app.get("/countries/search", (req:Request, res:Response) => {    
    let result: country[] = countries
    let errorCode : number = 401

    try{
        if(!req.query.name && !req.query.capital && !req.query.continent )
            {
                errorCode = 406
                throw new Error()
            }

        if (req.query.name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
            )
        }
        
        if (req.query.capital) {
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
            )
        }
    
        if (req.query.continent) {
       result = result.filter(
          country => country.continent.includes(req.query.continent as string)
         )
      }
      res.status(200).send(result)
    }catch(error){
        res.status(errorCode).end()
    }


})



//requisição Endpoint 3
app.put("countries/edit/:id", (req:Request, res:Response) => {
    let result: country[] = countries
    
})



//servidor escutando uma porta, coloco um callback se quiser
app.listen(3003, () => {
    console.log("Servidor funcionando!")
})