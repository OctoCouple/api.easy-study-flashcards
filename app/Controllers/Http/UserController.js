'use strict'

const User = use('App/Models/User')

class UserController {
  async create({ request }) {
    const data = request.only(['name', 'email', 'password', 'providerId', 'providerName'])
    const user = await User.create(data)
    return user
  }
}

module.exports = UserController