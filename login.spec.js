const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
//const users = require('../data/users.json');

test('login with valid credentials-spec file', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto("google.com");
  // await login.login(users.valid.username, users.valid.password);
  // await expect(page).toHaveURL(/dashboard/);
});
