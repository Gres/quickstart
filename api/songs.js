import faker from "faker";

export function generateAuthors(){
  let authors = [];
  for (let id = 0; id < 10; id++) {
    authors.push({
      "id": id,
      "name": faker.internet.userName()
    })
  }
  return authors
}

export  function generateSongs () {
  let songs = [];
  for (let id = 0; id < 50; id++) {
    songs.push({
      "id": id,
      "name": faker.lorem.words(),
      "author": faker.random.arrayElement(generateAuthors()).id,
      "text": faker.lorem.paragraphs(5),
      "created": faker.date.past(),
    })
  }
  return songs
}


