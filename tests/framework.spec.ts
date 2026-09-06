import { test, expect } from '../fixtures/test-fixtures';
import { BasePage } from '../pages/BasePage';

test('framework health check', async ({ page }) => {
  const basePage = new BasePage(page);

  await basePage.navigateTo('/');

  const title = await basePage.getPageTitle();

  expect(title).toBeTruthy();
});