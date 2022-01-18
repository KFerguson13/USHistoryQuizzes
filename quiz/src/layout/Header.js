import { Link } from 'react-router-dom';
import './Header.css';

/** This is the header for the project used to make some of the navigation easier. */
const Header = () => {
    return (
        <div> 
            <nav className = "navbar navbar-dark bg-dark">
                <section className = "container-fluid">
                    <Link to="/Home" className = "home-link"> The United States to 1877 </Link>
                    <Link to ="/About" className = "nav-link"> About </Link>
                </section>
            </nav>
        </div> 
    )
}

export default Header;