export default function handler(_, res) {
    const robotsContent = `
        User-agent: Googlebot
        Disallow: /nogooglebot/
        
        User-agent: *
        Allow: /
        Crawl-delay: 10
        
        Sitemap: https://www.banana.codes/sitemap.xml
    `;
    res.setHeader('Content-Type', 'text/plain');
    res.write(robotsContent);
    res.end();
  }