
import { Page } from '@playwright/test';

export class ProfilePage {

  constructor(private page: Page) {}

  readonly menuButton = this.page.getByRole('button', {
    name: /Menu/,
  });

  readonly myProfileButton = this.page.getByRole('button', {
    name: 'My Profile',
  });

  readonly editProfileButton = this.page.getByRole('button', {
    name: /Edit Profile/,
  });

  readonly profilePictureInput = this.page.locator('#profilePicture');

  readonly profilePicturePreview = this.page.locator(
    '#app-main-content > section > div > div:nth-child(1) > form > div:nth-child(7) > div > div:nth-child(1)'
  );

  async openMenu() {
    await this.menuButton.waitFor({ state: 'visible' });
    await this.menuButton.click();
  }

  async openMyProfile() {
    await this.myProfileButton.click();
    await this.page.waitForTimeout(1000);
  }

  async clickEditProfile() {
    await this.editProfileButton.click();
  }

  async uploadProfilePicture(filePath: string) {
    await this.profilePictureInput.setInputFiles(filePath);
  }

  async getProfilePictureBackground() {
    return await this.profilePicturePreview.evaluate(
      (element) => getComputedStyle(element).backgroundImage
    );
  }
}