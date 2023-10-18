class Book {
  constructor(name, author, year, price) {
    this.name = name
    this.author = author
    this.year = year
    this.price = price
  }

  getPrice(discount) {
    const discountPrice = this.price - (this.price * discount) / 100
    console.log(`Kitabin adi: ${this.name}`)
    console.log(`Yazarin adi: ${this.author}`)
    console.log(`Yazildiği il: ${this.year}`)
    console.log(`Qiymet: ${discountPrice}`)
    console.log(`Endirim: ${discount}%`)
  }
}

const newBook = new Book('Harry', 'Filankes', 2009, 30)
newBook.getPrice(12)
