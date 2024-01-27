const { google } = require('googleapis');
const credentials = require('./credentials.json')

const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
);

async function readSheetData() {
    try {
        const sheets = google.sheets({ version: 'v4', auth });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: '1Q0KqKSKKs1weKynN04nUbsorBdtziKm8jfbMPwZIIXg',
            range: 'engenharia_de_software' // Adjust range as needed
        });
        const data = response.data.values;
        return data
    } catch (error) {
        console.error(error);
    }
}
