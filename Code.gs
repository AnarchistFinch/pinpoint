function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Song Lookup');
}

async function loadSongs() {

  try {

    const response =
      await fetch('./songs.json');

    songs =
      await response.json();

    document.getElementById('status')
      .style.display = 'none';

    console.log(
      'Loaded',
      songs.length,
      'songs'
    );

  } catch (error) {

    console.error(error);

    document.getElementById('status')
      .textContent =
      'Failed to load songs';
  }
}
