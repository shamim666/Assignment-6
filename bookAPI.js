
const loadBook = () => {
    const searchText = document.getElementById('searchinput');
    const searchTextVal = searchText.value;
    searchText.value = '' ;
    const url = `https://openlibrary.org/search.json?q=${searchTextVal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data))
}

const displayBook = (data) => {
    const books = data.docs.slice(0,20);
    
document.getElementById('resultnumber').innerHTML = `<h4>Searching Result is : ${data.numFound}</h4>`
    
     if(books.length === 0){
        const errorDisplay = document.getElementById('error')
        errorDisplay . innerText = 'No Book Found'
     }

     document.getElementById('bookdisplay').textContent = '' 
     console.log(books)

    books.forEach(book => {
        
        const bookdisplay = document.getElementById('bookdisplay')
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i }-M.jpg " class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Book Name: ${book.title}</h5>
              <p class="card-text">Author: ${book.author_name}</p>
              <p class="card-text">Publisher: ${book.publisher}</p>
              <p class="card-text">First Publish Year: ${book.first_publish_year ? book.first_publish_year : 'not available'}</p>
            </div>
    
    `
        bookdisplay.appendChild(div);
    })

}