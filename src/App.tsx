import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddFilme from './pages/AddFilme';
import EditFilme from './pages/EditFilme';
import Home from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddFilme />} />
        <Route path="/edit/:id" element={<EditFilme />} />
      </Routes>
    </Router>  
  );
}

export default App
