process.env.NODE_ENV = 'test'
const app = require('../index')
const request = require('supertest')(app)
const routeBase = '/api/v1/auth/apps'
const AppModel = require('./model')

process.env.NODE_ENV = 'test'
describe('APPLICATIONS', () => {
  beforeAll(async () => {
  await AppModel.deleteMany({})
  })
  describe('GET', () => {
    test('200 - returns all applications sent by a candidate', async () => {
      const res = await request.get(`${routeBase}/`)
      expect(res.statusType).toBe(2)
      expect(res.status).toEqual(200)
    })

     test('200 - return applications status', async () => {
      const res = await request.get(`${routeBase}/${'app_id here'}`)
      expect(res.statusType).toBe(2)
      expect(res.status).toEqual(200)
     })

    test('404 - no application sent yet', async () => {
      const res = await request.get(`${routeBase}/`)
      expect(res.statusType).toBe(4)
      expect(res.status).toEqual(404)
      expect(res.body.success).toBeTruthy()
      expect(res.body).toHaveProperty('data', [])
    })

  })
})
