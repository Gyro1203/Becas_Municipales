import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  if (localStorage.getItem('user')) {
    return (
      <>
        <NavBar />
        <h2>Ya estas logeado!</h2>
        <button onClick={() => navigate('/')}>Ir a home</button>
      </>
    );
  }

  return (
    <div>
      <h2>Inicia sesion!</h2>
      <LoginForm />
    </div>
  );
}

export default Login;
