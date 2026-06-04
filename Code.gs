function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Song Lookup');
}

function getSongs() {
  const sheetNames = [
    '1950s',
    '1960s',
    '1970s',
    '1980s',
    '1990s',
    '2000s',
    '2010s'
  ];

  const ss = SpreadsheetApp.openById('16WwCjiZbRdKBF5elxIO1Gl-Ni9IGkKOkz_FcoE_HlvI');
  const songs = [];

  sheetNames.forEach(sheetName => {
    const sheet = ss.getSheetByName(sheetName);

    if (!sheet) return;

    const data = sheet.getDataRange().getValues();

    for (let i = 0; i < data.length; i++) {
      if (data[i][1]) {
        songs.push({
          number: data[i][0],
          title: data[i][1],
          artist: data[i][2],
          decade: sheetName
        });
      }
    }
  });

  return songs;
}
