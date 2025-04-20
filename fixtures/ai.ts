import { test as base } from '@playwright/test';
import { AI } from 'chexpert';
export const aiTest = base.extend<{ ai: AI }>({
    ai: async ({ page }, use) => {
        const ai = new AI(page)
        use(ai)
    }
})