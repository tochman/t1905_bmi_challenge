describe('BMI Converter', () => {
  beforeAll(async () => {
    // visit the application running on the Jest Development Server
    await page.goto('http://localhost:3000');
  });

  beforeEach(async () => {
    // Reload the application between tests to reset state
    await page.reload();
  });

  it('should display "BMI Converter" text on page', async () => {
    await expect(page).toMatch('BMI Converter');
  });

  describe('Metric method', async () => {
    beforeEach(async () => {
      // This before block will be executed prior to each test in this describe block
      await page.select('select[id="method"]', 'metric')
      await page.type('input[name="weight"]', '95')
      await page.type('input[name="height"]', '186')
    })

    xit('displays assesment', async () => {
      await expect(page).toMatch('You are Overweight')
    })

    xit('displays BMI value', async () => {
      await expect(page).toMatch('BMI of 27.46')
    })
  })

  describe('Imperial method', async () => {
    beforeEach(async () => {
      // This before block will be executed prior to each test in this describe block
      await page.select('select[id="method"]', 'imperial')
      await page.type('input[name="weight"]', '200')
      await page.type('input[name="height"]', '73')
    })

    xit('displays assesment', async () => {
      await expect(page).toMatch('You are Overweight')
    })

    xit('displays BMI value', async () => {
      await expect(page).toMatch('BMI of 26.38')
    })
  })
}); 