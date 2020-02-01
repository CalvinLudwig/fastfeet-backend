import { Router } from 'express'
import SessionController from './app/controllers/SessionController'
import authMiddleware from './app/middlewares/auth'
import RecipientController from './app/controllers/RecipientController'

const routes = new Router()

routes.get('/', async (request, response) => { return response.sendStatus(200) })
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/recipients', RecipientController.store)
routes.put('/recipients/:recipient_id', RecipientController.update)
export default routes
