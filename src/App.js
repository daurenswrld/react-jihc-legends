import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/style.css'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tutors from './pages/Tutors';
import Teachers from './pages/Teachers';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/tutors' element={<Tutors />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;