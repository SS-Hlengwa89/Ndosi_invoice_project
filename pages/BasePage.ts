import { Page } from '@playwright/test';

export class BasePage {
    constructor(protected readonly page: Page) {}

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }
}