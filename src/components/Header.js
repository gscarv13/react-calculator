import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <div className="left">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
    <h1>Math Magician 🪄</h1>
  </div>
);

export default Header;
