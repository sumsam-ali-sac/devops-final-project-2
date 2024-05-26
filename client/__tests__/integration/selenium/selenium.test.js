const { Builder, By, until } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const axios = require("axios");

let driver;
const timestamp = Date.now();
const testUsername = `testuser_${timestamp}`;
const testEmail = `test_${timestamp}@example.com`;
const testPassword = "Sumsam.Ali.189";

beforeAll(async () => {
	const options = new firefox.Options();
	// If a custom path to Firefox is needed, uncomment the following line and specify the path
	// options.setBinary('/path/to/your/firefox/binary');

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
		const response = await axios.delete(`/api/node/user/delete`, {
			data: { email },
		});
		console.log("User deleted successfully", response.data);
	} catch (error) {
		console.error("Error deleting user", error);
	}
}

test("loads signup page", async () => {
	await driver.get("http://localhost:5173/sign-up");
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
	await driver.get("http://localhost:5173/sign-up");
	await driver.findElement(By.id("username")).sendKeys(testUsername);
	await driver.findElement(By.id("email")).sendKeys(testEmail);
	await driver.findElement(By.id("password")).sendKeys(testPassword);
	await driver.findElement(By.id("confirmPassword")).sendKeys(testPassword);
	await driver.findElement(By.css('button[type="submit"]')).click();
	await driver.wait(until.urlIs("http://localhost:5173/sign-in"), 5000);
	expect(await driver.getCurrentUrl()).toBe("http://localhost:5173/sign-in");
});

test("login with valid credentials", async () => {
	await driver.get("http://localhost:5173/sign-in");
	await driver.findElement(By.id("email")).sendKeys(testEmail);
	await driver.findElement(By.id("password")).sendKeys(testPassword);
	await driver.findElement(By.css('button[type="submit"]')).click();
	await driver.wait(until.urlIs("http://localhost:5173/"), 5000);
	expect(await driver.getCurrentUrl()).toBe("http://localhost:5173/");
});
