const credentials = require('./credentials.json');
const GoogleSheets = require('./google');
const { google } = require('googleapis');

let googleSheets = new GoogleSheets();

googleSheets.authorize(credentials, async auth => {
  // console.log('asd')
  try {
    await getDataFromSheet(auth);
  } catch (e) {
    console.log('Error', e);
  }
});

const getDataFromSheet = async auth => {
  const sheets = google.sheets({ version: 'v4', auth });
  sheets.spreadsheets.values.get(
    {
      spreadsheetId: '1GP2l_W2JqpdmslWvDRnthA9V0fctHtskzHkhxScO44g',
      range: 'A3:E35', 
    },
    (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      console.log(rows[6])

    //   if (rows.length) {
    //     console.log('Name, Major:');
    //     // Print columns A and E, which correspond to indices 0 and 4.
    //     rows.map(row => {
    //       console.log(`${row[0]}, ${row[4]}`);
    //     });
    //   } else {
    //     console.log('No data found.');
    //   }
    }
  );
};
