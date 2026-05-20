<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" exclude-result-prefixes="default">
<xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>
<xsl:template match="/">
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>DriveEase — Sitemap</title>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #0a0a0a;
      color: #FAFAF8;
      font-family: 'Manrope', -apple-system, sans-serif;
      padding: 2rem 1rem;
    }
    .container { max-width: 900px; margin: 0 auto; }
    h1 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
    .subtitle { color: #A09B93; font-size: 0.9rem; margin-bottom: 2rem; }
    .gold-line {
      height: 1px;
      background: linear-gradient(90deg, transparent, #C9A96E, transparent);
      opacity: 0.4;
      margin-bottom: 2rem;
    }
    table { width: 100%; border-collapse: collapse; }
    th {
      text-align: left;
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #C9A96E;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(201, 169, 110, 0.15);
    }
    td {
      padding: 0.75rem 1rem;
      font-size: 0.85rem;
      color: #A09B93;
      border-bottom: 1px solid rgba(201, 169, 110, 0.06);
    }
    tr:hover td { background: rgba(201, 169, 110, 0.03); }
    td a {
      color: #FAFAF8;
      text-decoration: none;
      transition: color 0.2s;
    }
    td a:hover { color: #C9A96E; }
    .priority { font-weight: 500; color: #D4BA85; }
    .count { color: #6B6560; font-size: 0.8rem; margin-top: 1.5rem; }
  </style>
</head>
<body>
  <div class="container">
    <h1>DriveEase Sitemap</h1>
    <p class="subtitle">XML Sitemap for search engine crawlers</p>
    <div class="gold-line"/>
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Last Modified</th>
          <th>Frequency</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="urlset/url">
        <tr>
          <td><a href="{loc}" target="_blank"><xsl:value-of select="loc"/></a></td>
          <td><xsl:value-of select="lastmod"/></td>
          <td><xsl:value-of select="changefreq"/></td>
          <td class="priority"><xsl:value-of select="priority"/></td>
        </tr>
        </xsl:for-each>
      </tbody>
    </table>
    <p class="count"><xsl:value-of select="count(urlset/url)"/> URLs</p>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
