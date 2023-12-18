import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { AuthProvider, useAuth } from '../context/AuthContext';
import NavBar from '../components/NavBar';
import { Container, AppBar, IconButton, Toolbar, Button, Typography } from '@mui/material';

function Root() {
  return (
    <AuthProvider>
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
    <Container>
      <AppBar position='static' >
        <Toolbar>
          <Typography variant='h6' sx={{flexGrow: 1}}>BECAS MUNICIPALES</Typography>
          <header>
            <Button color='inherit' onClick={() => navigate('/')}>
              HOME
            </Button>
            <Button color='inherit' onClick={() => navigate('/getForms')}>
              VER POSTULACIONES
            </Button>
            <Button color='inherit' onClick={() => navigate('/Forms')}>
              POSTULAR
            </Button>
          </header>
        </Toolbar>
        <Toolbar>
          <Typography variant='h6' sx={{flexGrow: 1}}>Estas logeado como: {user.roles[0]["name"]}</Typography>
          <Button color='inherit' onClick={handleLogout}>Cerrar sesion</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Container>
  );
}

export default Root;
