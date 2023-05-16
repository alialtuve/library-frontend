import { useState } from 'react';
import { Link } from 'react-router-dom';

const BookPage = () => {

  const [books, setBooks] = useState([]);

  const loadBooks = () => {
     fetch('http://localhost:5000/api/books')
     .then(res => res.json())
     .then(allBooks => setBooks(allBooks))
  }
  loadBooks();
  return(
    <main>
      <h1>Listado de libros</h1>
      <hr />
      {books.map(eachBook => {
        return(
          <article className='book-card'>
            <h3 key="{eachBook}">{eachBook.title}</h3>
          </article>
        )
      })}
      <Link to="/"> Volver al inicio</Link>
    
    </main>
  )
}

export default BookPage;