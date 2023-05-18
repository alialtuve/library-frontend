import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import IndexPage  from './pages/IndexPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const AppRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage/>} /> 
        <Route path='*' element={<NotFoundPage/>} /> 
      </Routes>
    </Router>
  )
}
