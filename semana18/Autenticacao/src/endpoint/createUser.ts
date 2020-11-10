import express from 'express'
import { Request, Response } from "express";
//import cors from 'cors'
import dotenv from 'dotenv'
import { idGenerator } from '../services/idGenerator';
import {createUserTable} from '../data/createUserTable'
import { generateToken } from '../services/Authenticator';

const app = express()
app.use(express.json())
//app.use(cors())

dotenv.config()

app.post("/signup", async (req: Request, res: Response) => {
    try {
      // Item b. Validação do email
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      // Item c. Validação da senha
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const id = idGenerator();
  
    
      await createUserTable(id, userData.email, userData.password);
  
      const token = generateToken({
        id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });