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
document.addEventListener('DOMContentLoaded', listenForFunFacts);

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
      if (isSongSelected) {
        document.getElementById('lyrics_container').innerHTML = song.lyrics;
      }
    });
}

// cette fonction permet de se connecter au server ws
// et récuperer les données
function listenForFunFacts() {
  const socket = new WebSocket('ws://localhost:3000');
  // en arriere plan, on a envoyé une requete 'connection' au serveur
  socket.addEventListener('message', function (event) {
    const funFactContainer = document.querySelector('#fun_fact_container');
    funFactContainer.textContent = event.data;
    // lancer le timer
    // @ts-ignore
    var duration = moment.duration({
      'minutes': 0,
      'seconds': 10
    });

    var timestamp = new Date(0, 0, 0, 2, 10, 30);
    var interval = 1;
    var timer = setInterval(function () {
      timestamp = new Date(timestamp.getTime() + interval * 1000);
      // @ts-ignore
      duration = moment.duration(duration.asSeconds() - interval, 'seconds');
      var min = duration.minutes();
      var sec = duration.seconds();

      sec -= 1;
      if (min < 0) return clearInterval(timer);
      if (min < 10 && min.length != 2) min = '0' + min;
      if (sec < 0 && min != 0) {
        min -= 1;
        sec = 59;
      } else if (sec < 10 && sec.length != 2) sec = '0' + sec;

      document.querySelector('#countdown').innerHTML = 'Next fun fact in: <b>' + min + ':' + sec + '</b>';
      if (min == 0 && sec == 0)
        clearInterval(timer);
    }, 1000);
  })


}