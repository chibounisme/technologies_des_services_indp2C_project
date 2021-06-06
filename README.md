This is a group class project for the class: "Service Technologies".

The group members are:
- Abassi Ahmed
- Baccari Mohamed Mootez
- Ben Mabrouk Sami
- Boussoukaya Sahar
- Chiboub Mohamed

class: INDP2 - C

Commit History:

- Commit #1 : Initial Commit :
  - Created project with initial given template and included a README.md file.

- Commit #2: Update README.md :
  - Updated README.md file with group members names and class

- Commit #3: 1st Step:
  - Added static data to *index.html* showcasing an overview about the Artist "Michael Jackson", his biography, career and most famous songs. Each song element when clicked, will take you to the youtube video of it.
  - modified *theme.css* to style the main HTML page to a modified theme.

- Commit #4: 2nd Step:
  - Add Typescript implementation to get dynamic data of the song lyrics and display them on the website.
  - Used [Lyrics.ovh API](https://lyricsovh.docs.apiary.io/) to get the data corresponding to the lyrics of a specified song for the artist "Michael Jackson".
  - Add a dynamic welcome message to read the name of the user and display it on the website at the top of the main screen.
  - Converted the typescript file to a javascript one by using the command:
    > *tsc main.ts*
  - Added 3 cheat sheets for HTML5, CSS3 and JavaScript correspondingly.

- Commit #5: 3rd Step:
  - Added Implementation of JAX-RS REST API using RESTEasy in a Java project using the given tutorial
  - Tested the REST endpoints using navigator

- Commit #6: 4th Step:
  - Implemented Websocket Server (inside websocket folder) using Node.js & Express. The server sends the WS client a random fact about Michael Jackson every 10 seconds. 
  - The client connects to the WS Server on page load and proceeds to listen for the upcoming fun facts. Then displays them in the web page.
  - Added a countdown implementation using Moment.js.
  - Updated and compiled main.ts.
-Commit #7: 5th Step:
  - Added asynchronous implementation in older Step since we used callbacks to process received random facts in the client side.