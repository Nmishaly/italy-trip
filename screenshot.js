const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    args: ['--allow-file-access-from-files']
  });
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1080, height: 1350 });

  const filePath = path.resolve(__dirname, 'infographic.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });

  // Wait for fonts
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1000);

  await page.screenshot({
    path: path.resolve(__dirname, 'family-update.png'),
    fullPage: false,
    clip: { x: 0, y: 0, width: 1080, height: 1350 }
  });

  await browser.close();
  console.log('Done!');
})();
