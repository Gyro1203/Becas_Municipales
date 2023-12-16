import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    return(
        <header>
            <nav>
                <h1>LOGO</h1>
                <ul>
                    <li><a onClick={() => navigate('/')}>HOME</a></li>
                    <li><a onClick={() => navigate('/main')}>MAIN</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;