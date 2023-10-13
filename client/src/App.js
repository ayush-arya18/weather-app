import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/home';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
