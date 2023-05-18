import { Link } from 'react-router-dom';

const IndexPage = () => {

  return(
    <main>
      <h1>Bienvenido a tu biblioteca virtual</h1>
      <hr />
      <Link to="/books"> Ir a libros</Link>
    </main>
  )
}

export default IndexPage;
