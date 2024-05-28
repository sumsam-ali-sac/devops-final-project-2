const { Builder, By, until } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const axios = require("axios");

let driver;
const baseApiUrl = "http://localhost:3000";
const baseUrl = "http://localhost:5173";
const firefoxPath = "/usr/local/bin/firefox";
const timestamp = Date.now();
const testUsername = `testuser_${timestamp}`;
const testEmail = `test_${timestamp}@example.com`;
const testPassword = "Sumsam.Ali.189";

beforeAll(async () => {
	const options = new firefox.Options();
	options.setBinary(firefoxPath);
	options.addArguments("-headless");

	driver = await new Builder()
		.forBrowser("firefox")
		.setFirefoxOptions(options)
		.build();
});

afterAll(async () => {
	if (driver) {
		await driver.quit();
	}
	await deleteUser(testEmail);
});

async function deleteUser(email) {
	try {
		const response = await axios.delete(`/api/user/delete`, {
			data: { email },
		});
		console.log("User deleted successfully", response.data);
	} catch (error) {
		console.error("Error deleting user", error);
	}
}

test("loads signup page", async () => {
	await driver.get(`${baseUrl}/sign-up`);
	const usernameInput = await driver.findElement(By.id("username"));
	expect(usernameInput).toBeTruthy();
	const emailInput = await driver.findElement(By.id("email"));
	expect(emailInput).toBeTruthy();
	const passwordInput = await driver.findElement(By.id("password"));
	expect(passwordInput).toBeTruthy();
	const confirmPasswordInput = await driver.findElement(
		By.id("confirmPassword")
	);
	expect(confirmPasswordInput).toBeTruthy();
});

test("signup with valid credentials", async () => {
	await driver.get(`${baseUrl}/sign-up`);
	await driver.findElement(By.id("username")).sendKeys(testUsername);
	await driver.findElement(By.id("email")).sendKeys(testEmail);
	await driver.findElement(By.id("password")).sendKeys(testPassword);
	await driver.findElement(By.id("confirmPassword")).sendKeys(testPassword);
	await driver.findElement(By.css('button[type="submit"]')).click();
	await driver.wait(until.urlIs(`${baseUrl}/sign-in`), 20000);
	expect(await driver.getCurrentUrl()).toBe(`${baseUrl}/sign-in`);
});

test("login with valid credentials", async () => {
	await driver.get(`${baseUrl}/sign-in`);
	await driver.findElement(By.id("email")).sendKeys(testEmail);
	await driver.findElement(By.id("password")).sendKeys(testPassword);
	await driver.findElement(By.css('button[type="submit"]')).click();
	await driver.wait(until.urlIs(`${baseUrl}/`), 20000);
	expect(await driver.getCurrentUrl()).toBe(`${baseUrl}/`);
});
