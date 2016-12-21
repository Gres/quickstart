export class Author {
  id: number;
  name: string;
  avatar: string;
  constructor(author:any) {
    console.info(author);
    if (author) {
      this.id = author.id;
      this.name = author.name;
      this.avatar = author.avatar;
    }
  }
}

