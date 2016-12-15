'use strict';

var _songs = require('./songs');

var path = function path() {
  return {
    'songs': (0, _songs.generateSongs)(),
    'authors': (0, _songs.generateAuthors)()
  };
};

module.exports = path;
//# sourceMappingURL=db.js.map