"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAuthors = generateAuthors;
exports.generateSongs = generateSongs;

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateAuthors() {
  var authors = [];
  for (var id = 0; id < 10; id++) {
    authors.push({
      "id": id,
      "name": _faker2.default.internet.userName()
    });
  }
  return authors;
}

function generateSongs() {
  var songs = [];
  for (var id = 0; id < 50; id++) {
    songs.push({
      "id": id,
      "name": _faker2.default.lorem.words(),
      "author": _faker2.default.random.arrayElement(generateAuthors()).id,
      "text": _faker2.default.lorem.paragraphs(5),
      "created": _faker2.default.date.past()
    });
  }
  return songs;
}
//# sourceMappingURL=songs.js.map