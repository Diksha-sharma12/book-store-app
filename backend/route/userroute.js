import express from 'express'
import { signup } from '../controller/usercntroller.js'
import { login } from '../controller/usercntroller.js'
const app= new express()
const router=express.Router()
router.post('/signup',signup)
router.post('/login',login)

export default router