class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus() {
    //*here not with _. cz e use getters for checked out //
    this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating() {
    let averageValue = this.ratings.reduce((acc, rating) => acc + rating);
    return averageValue / this.ratings.length;
  }
  addRating(argument) {
    this.ratings.push(argument);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckOutStatus();
console.log("boolen value : ", historyOfEverything.isCheckedOut); //*false
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(
  "historyOfEverything rating array: ",
  historyOfEverything.getAverageRating()
);

const speed = new Movie("speed", "Jan de Bont", 116);

speed.toggleCheckOutStatus();
console.log("value ", speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log("array :", speed.getAverageRating());
