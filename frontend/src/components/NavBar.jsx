import { Link, useNavigate } from 'react-router-dom';
import { Container, AppBar, IconButton, Toolbar, Button, Typography } from '@mui/material';

function NavBar() {

    const navigate = useNavigate();

    return(
        <Container>
        <AppBar position='static' >
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow: 1}}>BECAS MUNICIPALES</Typography>
                <header>
                    <Button color='inherit' onClick={() => navigate('/main')}>
                        HOME
                    </Button>
                    <Button color='inherit' onClick={() => navigate('/Forms')}>
                        POSTULAR
                    </Button>
                </header>
            </Toolbar>
        </AppBar>
        </Container>
    );
}

export default NavBar;