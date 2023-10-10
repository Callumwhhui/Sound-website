import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef, useState } from 'react'; // Import useState
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // Use state to track navbar open/close

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen); // Toggle the state
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <Link to='/'><img src={Logo} alt="logo" /></Link>
      <nav className={isNavOpen ? 'responsive_nav' : ''}> {/* Apply the class conditionally */}
        <Link to="/" onClick={closeNavbar}>Home</Link>
        <Link to="/about" onClick={closeNavbar}>About</Link>
        <Link to="/hires" onClick={closeNavbar}>Hires</Link>
        <Link to="/install" onClick={closeNavbar}>Installs</Link>
        <Link to="/production" onClick={closeNavbar}>Production</Link>

        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
