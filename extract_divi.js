import fs from 'fs';

const filePath = 'Divi Builder Layout (5).json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Divi builder data is usually a deeply nested array or object.
// We can just regex the raw string to find texts, images, and colors.
const rawString = fs.readFileSync(filePath, 'utf8');

// Extract all image URLs
const imgRegex = /https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|gif|webp)/g;
const images = [...new Set(rawString.match(imgRegex) || [])];

// Extract colors
const colorRegex = /#[0-9a-fA-F]{6}/g;
const colors = [...new Set(rawString.match(colorRegex) || [])];

// Try to extract text inside HTML tags in the shortcodes
const textRegex = /<p[^>]*>(.*?)<\/p>/gs;
let texts = [];
let match;
while ((match = textRegex.exec(rawString)) !== null) {
    let cleanText = match[1].replace(/<[^>]+>/g, '').trim();
    cleanText = cleanText.replace(/&nbsp;/g, ' ').replace(/\\u[0-9a-fA-F]{4}/g, (match) => {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
    });
    if (cleanText) {
        texts.push(cleanText);
    }
}

// Extract headers
const headerRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/gs;
while ((match = headerRegex.exec(rawString)) !== null) {
    let cleanText = match[1].replace(/<[^>]+>/g, '').trim();
    if (cleanText) {
        texts.push(cleanText);
    }
}

const output = {
    colors,
    images,
    texts
};

fs.writeFileSync('extracted_data.json', JSON.stringify(output, null, 2));
console.log('Extraction complete. See extracted_data.json');
