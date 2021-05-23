const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server: server });

const funFacts = [
    'Jackson dreamed of playing the role of Spiderman so much that he once tried to purchase Marvel Comics when it filed for bankruptcy just so he could cast himself as the character.',
    'Jackson claims Mexican food was his favorite type of cuisine to order for takeout.',
    'On the day that Jackson died on June 25, 2009, Wikipedia, AOL, and Twitter all crashed at the same time at 3:15 pm.',
    'Despite boasting assets of $1 billion at the time of his death, Jackson also allegedly owed $500 million in unpaid debts.',
    'The residents of Gabon on the Ivory Coast gave Jackson the title of king in their village, making him royalty in this little corner of the world.',
    'It was once reported that Jackson racked up over $1 million in library fines because of overdue books.',
    'While many fans are familiar with Jackson’s treasured pet llamas, Louis and Lola, they may not know that he routinely took the pair with him to his recording studio in Los Angeles.',
    'After being so impressed with the treatment he received at the Brotman Medical Center in California following the accident in the Pepsi commercial, Jackson donated $1.5 million to the hospital, resulting in the naming of the “Michael Jackson Burn Center.”',
    'The Neverland Ranch mansion was listed for $100 million in 2015, but was discounted several times until the Pittsburg Penguins co-owner purchased the estate for $22 million in 2019.',
    'Not a stranger to controversy, Jackson’s own sister LaToya once said that she thought her brother was a pedophile.',
    'While the Jackson family is very well known, many people do not know that Marlon had a twin brother named Brandon who tragically died within 24 hours of his birth.',
    'The security of Jackson’s Neverland Ranch in Santa Ynez, California required the employment of at least 40 security guards patrolling the grounds at one time.',
    'Jackson has not one, but two stars on the Hollywood Walk of Fame, representing his work as a solo artist and as a part of the Jackson 5.',
];

// lancer la fonction connection lorsque un client se connecte
// a notre server ws
wss.on('connection', function connection(ws) {
    // dans la fonction de l'event connection
    // on spécifie la logique websocket
    console.log('New client connected');
    // lancer la methode dans setinterval chaque X temps
    setInterval(() => {
        // choisir un element de funFacts par hasard
        const index = Math.floor(Math.random() * funFacts.length);
        // retourner au client funFacts[index]
        ws.send(funFacts[index]);
    }, 10 * 1000);
    // au cas ou on veut récuperer les données envoyés
    // par le client selon un evenement (e.g. message)
    ws.on('message', function incoming(message) {
        console.log(`received ${message}`);
        // console.log('received ' + message);
    });
});

app.get('/', (req, res) => res.send('hello world')),

    server.listen(3000, () => console.log('listening on port : 3000'));