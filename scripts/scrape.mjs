import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'public', 'images');

const PAGES = [
  '/',
  '/company',
  '/service',
  '/new-business-development',
  '/case',
  '/news',
  '/contact',
  '/privacypolicy',
  '/coming-soon',
  '/case/india-partnership',
  '/case/singapore-relocation-support',
  '/case/singapore-education-expansion',
  '/news/20240219',
  '/news/20231225',
  '/news/20231201',
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
    }).on('error', (e) => { fs.unlink(dest, () => {}); reject(e); });
  });
}

async function main() {
  fs.mkdirSync(IMG_DIR, { recursive: true });
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  const content = {};
  const allImages = new Set();

  for (const p of PAGES) {
    const url = `https://allerise.com${p}`;
    console.log(`Scraping ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await page.waitForSelector('body', { timeout: 10000 });

    const data = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img[src]'))
        .map((img) => img.src)
        .filter((s) => s && !s.startsWith('data:'));
      const bgImgs = Array.from(document.querySelectorAll('[style*="background"]'))
        .map((el) => {
          const m = el.style.backgroundImage?.match(/url\(["']?([^"')]+)["']?\)/);
          return m ? m[1] : null;
        })
        .filter(Boolean);
      return {
        title: document.title,
        text: document.body.innerText,
        images: [...imgs, ...bgImgs],
        html: document.querySelector('main, [class*="page"], body')?.innerHTML?.slice(0, 50000) || '',
      };
    });

    content[p] = { title: data.title, text: data.text, images: data.images };
    data.images.forEach((img) => allImages.add(img));
    console.log(`  -> ${data.title.slice(0, 60)}`);
  }

  await browser.close();

  // Download images
  const imageMap = {};
  let i = 0;
  for (const url of allImages) {
    if (!url.includes('storage.googleapis.com') && !url.includes('allerise.com')) continue;
    const ext = path.extname(new URL(url).pathname) || '.png';
    const name = `asset-${String(i).padStart(3, '0')}${ext}`;
    const dest = path.join(IMG_DIR, name);
    try {
      await download(url, dest);
      imageMap[url] = `/images/${name}`;
      console.log(`Downloaded ${name}`);
      i++;
    } catch (e) {
      console.warn(`Failed ${url}: ${e.message}`);
    }
  }

  fs.writeFileSync(
    path.join(ROOT, 'scrape', 'content.json'),
    JSON.stringify({ pages: content, imageMap }, null, 2),
    'utf8'
  );
  console.log(`\nDone. ${Object.keys(content).length} pages, ${Object.keys(imageMap).length} images.`);
}

main().catch(console.error);
