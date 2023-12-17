import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    return(
        <header>
            <nav>
                <h1>LOGO</h1>
                <ul>
                    <li>
                        <button onClick={() => navigate('/')}>HOME</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/Forms')}>POSTULAR</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;