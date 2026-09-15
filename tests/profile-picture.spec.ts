
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';
import path from 'path';

test.describe('Profile Picture Upload', () => {

  test('Login, navigate to profile and update profile picture', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);

    // Navigate to Ndosi application
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    // Open login
    await loginPage.openLogin();

    // Login
    await loginPage.login(
      process.env.TEST_EMAIL!,
      process.env.TEST_PASSWORD!
    );

    // Navigate to My Profile
    await profilePage.openMenu();
    await profilePage.openMyProfile();

    // Open Edit Profile
    await profilePage.clickEditProfile();

    // Upload profile picture
    const imagePath = path.resolve('test-data/profile-picture.jpg');

    await profilePage.uploadProfilePicture(imagePath);

    // Verify profile picture was updated
    const backgroundImage =
      await profilePage.getProfilePictureBackground();

    expect(backgroundImage).not.toBe('none');
  });

});