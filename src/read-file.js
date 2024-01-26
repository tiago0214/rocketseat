const path = require('path');
const XLSX = require('xlsx');

const readFile = (filePath) => {
    try {
        const currentFilePath = path.resolve(__dirname, filePath);
        const workbook = XLSX.readFile(filePath);
    } catch (error) {
        console.log("File not found!");
    }
}

module.exports = readFile;