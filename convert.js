import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const dirs = ['public/projects', 'public/tools'];

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

async function processDirectory(dir) {
  const files = await readdir(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    const statInfo = await stat(filePath);
    if (statInfo.isFile() && ['.png', '.jpg', '.jpeg'].includes(extname(file).toLowerCase())) {
      const outputPath = join(dir, file.replace(extname(file), '.webp'));
      await convertToWebP(filePath, outputPath);
    }
  }
}

async function main() {
  for (const dir of dirs) {
    await processDirectory(dir);
  }
}

main().catch(console.error);