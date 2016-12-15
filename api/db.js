import {generateAuthors, generateSongs} from './songs';

let path = () => ({
  'songs': generateSongs(),
  'authors': generateAuthors()
})

module.exports = path;
