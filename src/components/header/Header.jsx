import './styles.scss';
import Logo from '../../common/assets/imgs/pokemon-logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='HeaderContainer'>
            <a href="./">
                <img src={Logo} alt="logo" />
            </a>
            <ul className='HeaderMenu'>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/Pokemon"> Pokemon </Link></li>
                <li><Link to="/"> Contato </Link></li>
            </ul>
        </header>
    );
}

export default Header;