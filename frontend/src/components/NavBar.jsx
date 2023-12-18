import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    return(
        <header>
            <nav>
                <img src="https://permisodecirculacion.cl/wp-content/uploads/2020/03/Muncipalidad_de_Concepcion-1024x769-1-300x225.png" alt="" />
                <ul>
                    <li>
                        <button onClick={() => navigate('/')}>HOME</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/main')}>MAIN</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;