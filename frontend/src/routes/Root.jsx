import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { AuthProvider, useAuth } from '../context/AuthContext';
import NavBar from '../components/NavBar';

function Root() {
  return (
    <AuthProvider>
      <NavBar />
      <PageRoot />
    </AuthProvider>
  );
}

function PageRoot() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const { user } = useAuth();

  return (
    <div>
      <div>
        <div>
          <img src="https://www.movilh.cl/wp-content/uploads/2016/05/conce.jpg"/>
        </div>
        <h1>Aqui deberia ir un header</h1>
        <p>Estas logeado como: {user.roles[0]["name"]}</p>
        <button onClick={handleLogout}>Cerrar sesion</button>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
