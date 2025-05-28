import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'chinese.jpg',
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000',
  },
  {
    name: 'momo.png',
    url: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=1000',
  },
  {
    name: 'mocktail.jpg',
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000',
  },
  {
    name: 'shake.jpg',
    url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1000',
  },
  {
    name: 'western.jpg',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000',
  },
  {
    name: 'burger.jpg',
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000',
  },
  {
    name: 'sizzler.jpg',
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000',
  },
  {
    name: 'pizza.jpg',
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000',
  },
  {
    name: 'pasta.jpg',
    url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000',
  },
  {
    name: 'soup.jpg',
    url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000',
  },
  {
    name: 'combo.jpg',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000',
  },
  {
    name: 'main.jpg',
    url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000',
  },
  {
    name: 'thali.jpg',
    url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000',
  },
  {
    name: 'bread.jpg',
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000',
  },
  {
    name: 'rice.jpg',
    url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1000',
  },
  {
    name: 'raita.jpg',
    url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1000',
  },
  {
    name: 'salad.jpg',
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000',
  },
  {
    name: 'papad.jpg',
    url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1000',
  },
  {
    name: 'dessert.jpg',
    url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000',
  },
];

const publicDir = path.join(__dirname, '../public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Download each image
images.forEach(({ name, url }) => {
  const filePath = path.join(publicDir, name);
  const file = fs.createWriteStream(filePath);

  https
    .get(url, (response) => {
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${name}`);
      });
    })
    .on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${name}:`, err.message);
    });
});
