import { Routes, Route } from 'react-router-dom';
import './App.css';
import BookDetail from './pages/bookDetail/BookDetail';
import BookPage from './pages/bookpage/BookPage';
import IndexPage from './pages/indexpage/IndexPage';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/books' element={<BookPage/>} />
        <Route path='/books/detail' element={<BookDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
