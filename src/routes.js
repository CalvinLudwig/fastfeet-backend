import { Router } from 'express'
import SessionController from './app/controllers/SessionController'

const routes = new Router()

routes.get('/', async (request, response) => { return response.sendStatus(200) })
routes.post('/sessions', SessionController.store)
export default routes
