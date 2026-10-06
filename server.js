const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const HOST = '127.0.0.1';
const PORT = Number(process.env.PORT) || 4173;
const UPSTREAM = new URL('https://ubilling.net.ua/aerialalerts/');
const PAGE = 'SafeWay___Знай_Дій_Будь_у_безпеці_23.html';
const STATIC_FILES = {
  '/': { file: PAGE, type: 'text/html; charset=utf-8' },
  '/style.css': { file: 'style.css', type: 'text/css; charset=utf-8' },
  '/script.js': { file: 'script.js', type: 'text/javascript; charset=utf-8' }
};

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);

  if (requestUrl.pathname === '/api/alerts') {
    if (request.method !== 'GET') {
      response.writeHead(405).end('Method not allowed');
      return;
    }

    let target;
    try {
      target = new URL(requestUrl.searchParams.get('url') || UPSTREAM);
    } catch {
      response.writeHead(400).end('Invalid URL');
      return;
    }
    if (target.origin !== UPSTREAM.origin || target.pathname !== UPSTREAM.pathname) {
      response.writeHead(403).end('Upstream not allowed');
      return;
    }

    try {
      const upstream = await fetch(target, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(8000)
      });
      response.writeHead(upstream.status, {
        'Content-Type': upstream.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-store'
      });
      response.end(Buffer.from(await upstream.arrayBuffer()));
    } catch {
      response.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Alerts source unavailable');
    }
    return;
  }

  const asset = STATIC_FILES[requestUrl.pathname];
  if (request.method !== 'GET' || !asset) {
    response.writeHead(404).end('Not found');
    return;
  }

  fs.readFile(path.join(__dirname, asset.file), (error, content) => {
    if (error) {
      response.writeHead(500).end('Could not load site file');
      return;
    }
    response.writeHead(200, { 'Content-Type': asset.type });
    response.end(content);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`SafeWay available at http://${HOST}:${PORT}`);
});