
const loadBook = () => {
    const searchText = document.getElementById('searchinput');
    const searchTextVal = searchText.value;

    const url = `https://openlibrary.org/search.json?q=${searchTextVal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data))
}

const displayBook = (data) => {
    const books = data.docs;

    books.forEach(book => {

        const bookdisplay = document.getElementById('bookdisplay')
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Book Name: ${book.title}</h5>
              <p class="card-text">Author: ${book.author_name}</p>
              <p class="card-text">Publisher: ${book.publisher}</p>
              <p class="card-text">First Publish Year: ${book.first_publish_year}</p>
            </div>
    
    `
        bookdisplay.appendChild(div);
    })

}