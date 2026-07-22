export async function wait(page) {
  await page.waitForTimeout(2000);
}