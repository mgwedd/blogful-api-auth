process.env.TZ = 'UCT'
process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'test-jwt-secret'
process.env.TEST_DB_URL = process.env.TEST_DB_URL
|| 'postgresql://dunder-mifflin@localhost/blogful-auth-test'

require( 'dotenv' ).config()
const { expect } = require( 'chai' )
const supertest = require( 'supertest' )

global.expect = expect
global.supertest = supertest
