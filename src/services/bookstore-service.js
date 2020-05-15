const data = [
  {
    id: 1,
    name: "The Baltic states and Weimar Ostpolitik",
    author: "John Hiden",
    price: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41YzlHkCQ+L._SX317_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    name: "The Baltic",
    author: "Alan Warwick Palmer",
    price: 45,
    imageUrl: "https://m.media-amazon.com/images/I/41yB+om59sL._SY346_.jpg",
  },
  {
    id: 3,
    name: "The story of Miss Moppet",
    author: "Beatrix Potter",
    price: 33,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41TUi5fRaPL._SX375_BO1,204,203,200_.jpg",
  },
];

export default class BookstoreService {
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 700);
    });
  }
}
