import './create.css';

import createComp from '../components/LoginForm';

function create() {
    return (
      <>
        <ul>
            <li><a class="active" href="#becas">Becas Municipales</a></li>
            <li><a href="#espacio">    </a></li>
            <li><a href="#verbecasvencidas">Ver Becas vencidas</a></li>
            <li><a href="#crearbecas">Crear Becas</a></li>
            <li><a href="#verbecas">Ver Becas</a></li>
        </ul>
        <div style="padding:20px;margin-top:30px;background-color:#111;height:1500px;color: white;">
            <h1>Sección de gestión de becas</h1>
        </div>
      </>  
    );
}
  
export default create;
