import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Determine which dist directory to use
const distPath = join(__dirname, 'dist');
const rootDistPath = join(__dirname, '..', 'dist');

let staticPath;
if (fs.existsSync(rootDistPath)) {
  staticPath = rootDistPath;
  console.log('Using root dist directory:', rootDistPath);
} else if (fs.existsSync(distPath)) {
  staticPath = distPath;
  console.log('Using local dist directory:', distPath);
} else {
  console.error('No dist directory found!');
  process.exit(1);
}

// Serve static files
app.use(express.static(staticPath));

// Handle React Router - catch all handler for SPA
app.get('*', (req, res) => {
  const indexPath = join(staticPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('index.html not found');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Frontend server running on port ${PORT}`);
  console.log(`📁 Serving files from: ${staticPath}`);
});
