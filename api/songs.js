import faker from "faker";
faker.locale = "ru";
export function generateAuthors(){
  let authors = [];
  for (let id = 0; id < 5; id++) {
    authors.push({
      "id": id,
      "name": faker.internet.userName(),
      "avatar": faker.image.people(32,32)
    })
  }
  return authors
}

export  function generateSongs () {
  let songs = [];
  for (let id = 0; id < 10; id++) {
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


