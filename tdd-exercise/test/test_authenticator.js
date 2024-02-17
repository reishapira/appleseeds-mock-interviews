import { assert } from 'chai'
import { UserAuthenticator } from '../src/UserAuthenticator.js'

describe('UserAuthenticator', () => {
  let authenticator

  beforeEach(() => {
    authenticator = new UserAuthenticator()
  })

  it('should register a new user', () => {
    const username = 'john.doe'
    const password = 'StrongPass123'

    const result = authenticator.registerUser(username, password)

    assert.isTrue(result)
    assert.isTrue(authenticator.isUserRegistered(username))
  })

  describe('Authenticated User', () => {
    const registeredUsername = 'john.doe'
    const correctPassword = 'StrongPass123'

    beforeEach(() => {
      authenticator.registerUser(registeredUsername, correctPassword)
    })

    it('should not register a user with an existing username', () => {
      // TODO
    })

    it('should log in a registered user with correct credentials', () => {
      // TODO
    })

    it('should not log in a user with incorrect credentials', () => {
      // TODO
    })

    it('should log out an authenticated user', () => {
      // TODO
    })
  })

  describe('Delete User', () => {
    it('should delete a registered user', () => {
      // TODO
    })

    it('should throw an error when trying to delete a non-existent user', () => {
      // TODO
    })
  })
})
