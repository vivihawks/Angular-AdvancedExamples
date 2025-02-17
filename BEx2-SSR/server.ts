import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  server.get('/api/**', (req, res) => { });
  
  // Serve non SSR routes
  server.get('/component-c', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'ndex.csr.html',
  }));
  
  // // Serve static files from /browser
  // server.get('**', express.static(browserDistFolder, {
  //   maxAge: '1y',
  //   index: 'index.html',
  // }));

  console.log("*********************************2")
  console.log(`${browserDistFolder}*********************************322`)
  // All regular routes use the Angular SSR engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    console.log("*********************************8")
    commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) =>{ res.send(html); console.log("*********************************3")})
    .catch((err) =>{ next(err)});
    
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
