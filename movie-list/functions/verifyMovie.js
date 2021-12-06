const { By } = require('selenium-webdriver')

const verifyMovie = async (driver) => {

    const movieName = 'Back to the Future'

    await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')
    
    await driver.findElement(By.xpath('//button')).click()
    
    const movie = await driver.findElement(By.xpath('//li/span')).getText()

    expect(movie).toEqual(movieName)
}

module.exports = {
    verifyMovie,
}