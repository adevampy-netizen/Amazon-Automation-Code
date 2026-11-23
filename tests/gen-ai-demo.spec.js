import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://danube-web.shop/');
  await page.getByText('Haben oder haben').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('anyname');
  await page.getByRole('textbox', { name: 'Name', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Surname' }).fill('anysurename');
  await page.getByRole('textbox', { name: 'Surname' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address' }).fill('123, anyaddress');
  await page.getByRole('textbox', { name: 'Zipcode' }).click();
  await page.getByRole('textbox', { name: 'Zipcode' }).click();
  await page.getByRole('textbox', { name: 'Zipcode' }).fill('123402');
  await page.getByRole('textbox', { name: 'Zipcode' }).press('Tab');
  await page.getByRole('textbox', { name: 'City' }).fill('porur');
  await page.getByRole('textbox', { name: 'City' }).press('Tab');
  await page.getByRole('textbox', { name: 'Company (optional)' }).fill('hirenexa');
  await page.getByText('I would like the items to be shipped as soon as possible in a single package').click();
  await page.getByRole('radio', { name: 'as soon as possible' }).check();
  await page.getByRole('radio', { name: 'as soon as possible' }).press('ControlOrMeta+-');
  await page.getByRole('radio', { name: 'as soon as possible' }).press('ControlOrMeta+-');
  await page.getByRole('button', { name: 'Buy' }).click();
  await page.getByRole('button', { name: 'Shop more' }).click();
  await page.getByRole('heading', { name: 'Top sellers' }).click();
});