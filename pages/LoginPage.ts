import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  readonly loginPageButton = this.page.getByRole('button', { name: /Login/ });

  readonly emailInput = this.page.locator('#login-email');

  readonly passwordInput = this.page.locator('#login-password');

  readonly loginButton = this.page.locator('#login-submit');

  async openLogin() {
    await this.loginPageButton.click();
  }

async login(email: string, password: string) {
  await this.emailInput.fill(email);
  await this.passwordInput.fill(password);

  await this.loginButton.click();

  // Verify successful login
  await this.page.getByRole('button', { name: /Home/i }).waitFor({
    state: 'visible',
  });
}
}