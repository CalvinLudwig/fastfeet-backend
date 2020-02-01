import * as Yup from 'yup'
import Recipient from '../models/Recipient'

class RecipientController {
  async store (request, response) {
    const schemaValidation = Yup.object().shape({
      name: Yup.string().required(),
      street_address: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      postal_code: Yup.number().required()
    })

    if (!(await schemaValidation.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' })
    }

    const recipient = await Recipient.create(request.body)

    return response.json(recipient)
  }

  async update (request, response) {
    const schemaValidation = Yup.object().shape({
      name: Yup.string(),
      street_address: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      postal_code: Yup.number()
    })

    if (!(await schemaValidation.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' })
    }

    let recipient = await Recipient.findByPk(request.params.recipient_id)

    if (!recipient) {
      return response.status(400).json({ error: 'Recipient not found.' })
    }

    recipient = await recipient.update(request.body)

    return response.json(recipient)
  }
}

export default new RecipientController()
