class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('https://example.com/login');
    }
  
    async login(username, password) {
      await this.page.fill('#username', username);
      await this.page.fill('#password', password);
      await this.page.click('button[type="submit"]');
    }
  }
  
  module.exports = { LoginPage };
  