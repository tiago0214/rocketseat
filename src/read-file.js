const path = require('path');
const XLSX = require('xlsx');


const readFile = (filePath) => {
    try {
        const currentFilePath = path.resolve(__dirname, filePath);
        const workbook = XLSX.readFile(currentFilePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: "A" });

        return jsonData
    } catch (error) {
        return "File not found!";
    }
}

module.exports = readFile;