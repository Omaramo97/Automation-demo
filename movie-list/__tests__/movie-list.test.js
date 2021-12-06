const {Builder,Capabilities } = require('selenium-webdriver')
const{addMovie} = require('../functions/addMovies')
const {verifyMovie}= require('../functions/verifyMovie')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () =>{
await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(async () =>{
    await driver.quit()
})

test('add movie', async () => {
    await addMovie(driver)
})

test('verify movie test', async () => {
    await verifyMovie(driver)
})