import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './public/galeria';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));

for (const file of files) {
  const filePath = path.join(dir, file);
  const newPath = path.join(dir, file.replace(/\.jpe?g$/, '.avif'));
  await sharp(filePath)
    .avif({ quality: 80, effort: 4 })
    .toFile(newPath);
  console.log(`Converted ${file} to AVIF`);
}
