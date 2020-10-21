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

//buscar paises por nome, esse country vem do arquivo que é um array
/* preciso passar os path paramentros na url depois do search
http://localhost:3003/countries/search?name=B
*/
app.get("/countries/search", (req:Request, res:Response) => {
    const result: country[] = countries.filter(
         //garantindo que o req.quer.name é uma string com o as
         country =>  country.name.includes(req.query.name as string)
    )
    res.status(200).send(result)
})

/*buscar paises por id
url: http://localhost:3003/countries/78
*/
app.get("/countries/:id", (req:Request, res:Response) => {
    const result: country | undefined = countries.find(
        country =>  country.id === Number(req.params.id)
    )
    res.status(200).send(result)
})

//DELETE
app.delete("/countries/:id", (req:Request, res:Response) => {
   let errorCode : number = 401
    try{

        if(!req.headers.authorization){
            throw new Error()
        }

        const countryIndex : number = countries.findIndex
        (country => country.id ===Number(req.params.id)
        )

        if(countryIndex === -1){
            errorCode = 404
            throw new Error()
        }
        countries.splice(countryIndex, 1)
        res.status(200).end()

    }catch(error){
        res.status(errorCode).end()

    }
})


//testes do slide
app.get('/test/hello', (req: Request, res: Response) => {
    res.send(`Olá, mundo!`)
}) 

 app.get('/test/:number/:name', (req: Request, res: Response) => {
    res.send(
    `oi ${req.params.name}, Seu número da sorte é ${req.params.number + 3}!
     `)
})    

//servidor escutando uma porta, coloco um callback se quiser
app.listen(3003, () => {
    console.log("Servidor funcionando!")
})