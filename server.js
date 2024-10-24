const express = require('express');
const next = require('next');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Utilisez le middleware compression
  server.use(compression());

  // Gérer toutes les requêtes avec Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Démarrer le serveur sur le port 3000
  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Serveur prêt sur http://localhost:${port}`);
  });
});
