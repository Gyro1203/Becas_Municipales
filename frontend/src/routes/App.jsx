import { CssBaseline } from "@mui/material";
import NavBar from "../components/NavBar";
import Container from '@mui/material/Container'

function App() {
  return (
    <>
      <Container>
        <CssBaseline />
        <h1>PLATAFORMA DE BECAS MUNICIPALES</h1>
        <img src="https://www.movilh.cl/wp-content/uploads/2016/05/conce.jpg"/>
        <h2>
          <p>Tenemos por objetivo dar la oportunidad de postular a becas, </p>
          <p>a todos los usuarios mayores de 14 años por medio de esta plataforma</p>
        </h2>
      </Container>
    </>
  );
}

export default App;
