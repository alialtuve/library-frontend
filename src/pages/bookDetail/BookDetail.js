import { Link } from 'react-router-dom';

const BookDetail = () => {

  return(
    <main>
      <h1>Detalle de libros</h1>
      <hr />
      <Link to="/books"> Volver a libros</Link>
    </main>
  )
}

export default BookDetail;