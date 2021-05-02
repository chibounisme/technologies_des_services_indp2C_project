interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
async function http<T>(
  request: RequestInfo
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(
    request
  );
  response.parsedBody = await response.json();
  return response;
}


class Song {
  songName: string;
  lyrics: string;

  constructor(name: string) {
    this.songName = name;
    this.lyrics = "";
  }
}

// execute loadSongData function once load event is fired after DOM reload
document.addEventListener('DOMContentLoaded', loadSongData);

let songs: Song[] = [];
let isSongSelected = false;

function loadSongData() {
  let username: string = prompt('Welcome, can you please give me your name?', "Foulen");
  document.getElementById('greet').textContent = "Bonjour " + username + "!";
  const s1 = document.getElementById('0');
  const s2 = document.getElementById('1');
  const s3 = document.getElementById('2');
  const s4 = document.getElementById('3');
  const s5 = document.getElementById('4');
  const s6 = document.getElementById('5');
  const songElements = [s1, s2, s3, s4, s5, s6];
  // iterate over all elements to add onclick event
  for (var i = 0; i < songElements.length; i++) {
    const song = new Song(songElements[i].innerText);
    songs.push(song);
  }
  for (let i = 0; i < songElements.length; i++) {
    let s: Song = songs[i];
    songElements[i].addEventListener('click', fetchSongLyrics);
  }
}

function fetchSongLyrics() {
  isSongSelected = true;
  const song = songs[parseInt(this.id)];
  // fetch lyrics by song name using "lyrics.ovh" API
  http<any>(`https://api.lyrics.ovh/v1/michael%20jackson/${song.songName}`)
    .then((body: any) => {
      song.lyrics = body.parsedBody.lyrics.replaceAll('\n', '<br>');
      if(isSongSelected) {
        document.getElementById('lyrics_container').innerHTML = song.lyrics;
      }
    });
}
