const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

async function analyzeHero(page, url) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2500);

  return page.evaluate(() => {
    const header = document.querySelector("header, nav");
    const h1 = document.querySelector("h1");
    const hero =
      document.querySelector("#home") ||
      document.querySelector("section") ||
      null;
    const img = hero?.querySelector("img") || document.querySelector("img");
    const canvas = document.querySelector("canvas");
    let canvasInfo = null;
    if (canvas) {
      const parent = canvas.parentElement;
      const ctx = canvas.getContext("2d");
      let sample = null;
      if (ctx && canvas.width > 0 && canvas.height > 0) {
        const midX = Math.floor(canvas.width / 2);
        const midY = Math.floor(canvas.height / 2);
        const data = ctx.getImageData(
          Math.max(0, midX - 50),
          Math.max(0, midY - 50),
          Math.min(100, canvas.width),
          Math.min(100, canvas.height),
        ).data;
        let opaque = 0;
        let r = 0;
        let g = 0;
        let b = 0;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] > 10) {
            opaque += 1;
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
          }
        }
        sample = {
          opaquePixels: opaque,
          avgRgb:
            opaque > 0
              ? [
                  Math.round(r / opaque),
                  Math.round(g / opaque),
                  Math.round(b / opaque),
                ]
              : null,
        };
      }
      canvasInfo = {
        bufW: canvas.width,
        bufH: canvas.height,
        styleW: canvas.style.width,
        styleH: canvas.style.height,
        clientW: canvas.clientWidth,
        clientH: canvas.clientHeight,
        parentH: parent ? Math.round(parent.getBoundingClientRect().height) : null,
        parentW: parent ? Math.round(parent.getBoundingClientRect().width) : null,
        sample,
      };
    }

    // tsparticles canvas (prod often nests canvas inside #tsparticles)
    const tsp = document.querySelector("#tsparticles canvas, .tsparticles canvas");

    return {
      title: document.title,
      h1: h1?.textContent?.trim(),
      h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
      headerHeight: header
        ? Math.round(header.getBoundingClientRect().height)
        : null,
      heroH: hero ? Math.round(hero.getBoundingClientRect().height) : null,
      imgSize: img
        ? {
            w: Math.round(img.getBoundingClientRect().width),
            h: Math.round(img.getBoundingClientRect().height),
          }
        : null,
      hasCanvas: Boolean(canvas),
      hasTsParticles: Boolean(document.querySelector("#tsparticles")),
      tspCanvas: tsp
        ? { w: tsp.width, h: tsp.height, clientW: tsp.clientWidth, clientH: tsp.clientHeight }
        : null,
      canvasInfo,
      navLinks: Array.from(document.querySelectorAll("header a, nav a"))
        .map((a) => a.textContent?.trim())
        .filter(Boolean)
        .slice(0, 24),
      bodyBg: getComputedStyle(document.body).backgroundColor,
      heroBg: hero ? getComputedStyle(hero).backgroundColor : null,
    };
  });
}

(async () => {
  const out = "/tmp/portfolio-compare";
  fs.mkdirSync(out, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  const localUrl = "http://localhost:3000/";
  const prodUrl = "https://germanbonacchi.vercel.app/";

  const localMetrics = await analyzeHero(page, localUrl);
  await page.screenshot({ path: path.join(out, "local-hero.png") });

  const prodMetrics = await analyzeHero(page, prodUrl);
  await page.screenshot({ path: path.join(out, "prod-hero.png") });

  await page.goto(localUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 700));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(out, "local-about.png") });

  await page.goto(prodUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 700));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(out, "prod-about.png") });

  console.log(
    JSON.stringify({ local: localMetrics, prod: prodMetrics }, null, 2),
  );
  await browser.close();
})();
