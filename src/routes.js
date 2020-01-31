import { Router } from 'express'

const routes = new Router()

routes.get('/', async (request, response) => { return response.sendStatus(200) })

export default routes
