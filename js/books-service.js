'use strict'

var gBooks;
var gCurrentBook;
const PAGE_SIZE = 4
var currPageIdx = 0


function getBooks() {
    var fromIdx = currPageIdx * PAGE_SIZE
    var books = gBooks.slice(fromIdx, fromIdx + PAGE_SIZE)
    return books
}


function createBooks() {
    var books = []
    var titles = ['אתה צריך רק אחת', 'תמיד עדיף בוקר של בושה על פני לילה של בדידות', 'גברת ביטוח לאומי', 'ילד חרא',
        'כל האינטרנט פאקינג ספויילרים', 'לגנוב זה כיף', 'לשרוף כסף באינטרנט', 'מעבדת הסמים הראשונה שלי',
        'מר חמין של שבת', 'מרכיבים קואליציה', 'פייק ניוז באינטרנט']
    for (let i = 0; i < 20; i++) {
        var vendor = titles[getRandomIntInclusive(0, titles.length - 1)]
        books.push(createBook(vendor))
    }
    gBooks = books;
}

function createBook(vendor) {
    return {
        id: makeId(),
        name: vendor,
        price: getRandomIntInclusive(1, 200),
        rate: 0,
    }
}

function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
}

function addBook(vendor) {
    var book = createBook(vendor)
    gBooks.push(book)
}

function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    gCurrentBook = book
    return book
}

function updateBook(bookId, newPrice) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    })
    gBooks[bookIdx].price = newPrice;
}

function rankBookUp() {
    gCurrentBook.rate++
}

function rankBookDown() {
    gCurrentBook.rate--
}

function nextPage() {
    currPageIdx++
}