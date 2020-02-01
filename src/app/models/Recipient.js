import Sequelize, { Model } from 'sequelize'

class Recipient extends Model {
  static init (sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street_address: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        postal_code: Sequelize.INTEGER
      }, {
        sequelize
      }
    )

    return this
  }
}

export default Recipient
