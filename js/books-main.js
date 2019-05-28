'use strict'

function init() {
    createBooks()
    renderBooks(gBooks)
    createEventListener()
}

function createEventListener(){
$('.read').click(function (event){
    var bookId = event.target.dataset.id
    onReadBook(bookId)
})
$('.update').click(function (event){
    var bookId = event.target.dataset.id
    onUpdateBooks(bookId)

})
$('.delete').click(function (event){
    var bookId = event.target.dataset.id
    onDeleteBook(bookId)
})
}

// Option 1 - Table
function renderBooks(books) {
    var strHtml = ''
    for (var i = 0; i < books.length; i++) {
        strHtml += `<tr><th scope="row">${i + 1}</th>` +
            `<td><img class="card-img-top2" src="img/${books[i].name}.jpg" alt="book-img"/></td>
            <td>${books[i].name}</td><td>${books[i].price}₪</td>
            <td><button data-id="${books[i].id}" class="btn btn-sm btn-primary read">Read</button>
            <button data-id="${books[i].id}" class="btn btn-sm btn-warning update">Update</button>
            <button data-id="${books[i].id}" class="btn btn-sm btn-danger delete">Delete</button></td></tr>`
    }
    $('table tBody').html(strHtml);
    createEventListener()
}

// Option 2 - Without EventListener
// function renderBooks(books) {
//     var strHtml = ''
//     for (var i = 0; i < books.length; i++) {
//         strHtml += `<tr><th scope="row">${i + 1}</th>` +
//             `<td><img class="card-img-top2" src="img/${books[i].vendor}.jpg" alt="book-img"/></td>
//             <td>${books[i].name}</td><td>${books[i].price}₪</td>
//             <td><button data-id=${books[i].id} onclick="onReadBook(this)" class="btn btn-sm btn-primary read">Read</button></td>
//             <td><button onclick="onReadBook()" class="btn btn-sm btn-warning update">Update</button></td>
//             <td><button onclick="onUpdateBooks(bookId)" class="btn btn-sm btn-danger delete">Delete</button></td></tr>`
//     }
//     $('table tBody').html(strHtml);
// }

// Option 3 Carousel model (From In-class files)
// function renderBooks() {
//     $('table').hide()
//     var books = getBooks()
//     var strHtmls = books.map(function (book) {
//         return `
//         <div class="card book-item">
//             <img class="card-img-top" src="img/${book.vendor}.jpg" alt="Card image cap">
//             <span class="delete-btn" onclick="onDeleteBook('${book.id}')">X</span>
//             <div class="card-body">
//             <h5 class="card-title">${book.vendor}</h5>
//             <p class="card-text">Price: ${book.price}₪</p>
//             <a href="#" class="btn btn-primary" onclick="onReadBook('${book.id}')">details</a>
//             <a href="#" class="btn btn-small" onclick="onUpdateBook('${book.id}')">Update</a>
//             </div>
//         </div> 
//         `
//     })
//     $('.books-container').html(strHtmls.join(''))
// }

function onReadBook(bookId) {
    readBook(bookId)
}

function onCloseModal() {
    $('.modal').hide()
}

function onDeleteBook(bookId) {
    deleteBook(bookId)
    renderBooks(gBooks)
}

function onAddBook() {
    var vendor = prompt('Name?')
    addBook(vendor)
    renderBooks(gBooks)
}

function onUpdateBooks(bookId) {
    var newPrice = +prompt('Price?');
    updateBook(bookId, newPrice);
    renderBooks(gBooks);
}

function onRankUp() {
    rankBookUp();
    $('.modal').find('h7').text(gCurrentBook.rate)
}

function onRankDown() {
    rankBookDown();
    $('.modal').find('h7').text(gCurrentBook.rate)
}

function onNextPage() {
    nextPage()
    renderBooks(gBooks)
}

function readBook(bookId) {
    var book = getBookById(bookId)
    // console.log(bookPicLocation);
    var $modal = $('.modal')
    $modal.find('h5').text(book.name)
    $modal.find('h7').text(gCurrentBook.rate)
    $modal.find('p').text(book.price + '₪')
    $modal.find('.modal-img').html(`<img src="img/${book.name}.jpg"/>`)
    $modal.show()
}