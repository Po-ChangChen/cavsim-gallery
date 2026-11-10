// Rebuild summary.pdf from index.html (print layout, US Letter). Usage: node tools/build_pdf.js
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(root, 'index.html'));
  await page.waitForTimeout(800);
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: path.join(root, 'summary.pdf'), format: 'Letter', printBackground: true });
  await browser.close();
})();
