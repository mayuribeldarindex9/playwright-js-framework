<<<<<<< HEAD
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const users = require('../data/users.json');

test('login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(users.valid.username, users.valid.password);
  await expect(page).toHaveURL(/dashboard/);
});
=======
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const users = require('../data/users.json');

test('login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(users.valid.username, users.valid.password);
  await expect(page).toHaveURL(/dashboard/);
});
>>>>>>> 4ee3d2bc7cf6b5f69101acf919ceb5a9101eb457
