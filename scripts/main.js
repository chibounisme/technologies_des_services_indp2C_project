var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function http(request) {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch(request)];
                case 1:
                    response = _b.sent();
                    _a = response;
                    return [4 /*yield*/, response.json()];
                case 2:
                    _a.parsedBody = _b.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
var Song = /** @class */ (function () {
    function Song(name) {
        this.songName = name;
        this.lyrics = "";
    }
    return Song;
}());
// execute traitement function once load event is fired after DOM reload
document.addEventListener('DOMContentLoaded', loadSongData);
var songs = [];
var isSongSelected = false;
function loadSongData() {
    var username = prompt('Welcome, can you please give me your name?', "Foulen");
    document.getElementById('greet').textContent = "Bonjour " + username + "!";
    var s1 = document.getElementById('0');
    var s2 = document.getElementById('1');
    var s3 = document.getElementById('2');
    var s4 = document.getElementById('3');
    var s5 = document.getElementById('4');
    var s6 = document.getElementById('5');
    var songElements = [s1, s2, s3, s4, s5, s6];
    // iterate over all elements to add onclick event
    for (var i = 0; i < songElements.length; i++) {
        var song = new Song(songElements[i].innerText);
        songs.push(song);
    }
    for (var i_1 = 0; i_1 < songElements.length; i_1++) {
        var s = songs[i_1];
        songElements[i_1].addEventListener('click', fetchSongLyrics);
    }
}
function fetchSongLyrics() {
    isSongSelected = true;
    var song = songs[parseInt(this.id)];
    // fetch lyrics by song name using "lyrics.ovh" API
    http("https://api.lyrics.ovh/v1/michael%20jackson/" + song.songName)
        .then(function (body) {
        song.lyrics = body.parsedBody.lyrics.replaceAll('\n', '<br>');
        if (isSongSelected) {
            document.getElementById('lyrics_container').innerHTML = song.lyrics;
        }
    });
}
