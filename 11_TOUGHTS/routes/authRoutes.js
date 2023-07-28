import express from 'express'
export const authRoutes = express.Router()
import AuthController from '../controllers/AuthController.js'

authRoutes.get('/login', AuthController.login)
authRoutes.get('/register', AuthController.register)
authRoutes.post('/register', AuthController.registerPost)