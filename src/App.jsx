
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hires from './components/Hires';
import Install from './components/Install';
import Production from './components/Production';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' Component={About}/>
        <Route path='/hires' Component={Hires}/>
        <Route path='/install' Component={Install}/>
        <Route path='/Production' Component={Production}/>
      </Routes>
    </Router>
  );
}

export default App;
