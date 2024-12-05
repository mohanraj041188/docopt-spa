
import puppeteer from 'puppeteer';

export async function generateMapImage(lat, lng, zoom = 14): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Leaflet Map</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <style>
            #map {
                width: 800px;
                height: 600px;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
        <script>
            const map = L.map('map').setView([${lat}, ${lng}], ${zoom});
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);
        </script>
    </body>
    </html>`;

    await page.setContent(htmlContent);
    await page.setViewport({ width: 800, height: 600 });
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds

    const screenshotBuffer = await page.screenshot();
    await browser.close();

    return Buffer.from(screenshotBuffer);
}
