import { useState } from 'react';
import './App.css';
import {BaseColaboradores} from './BaseColaboradores';
import Listado from './components/Listado' ;
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from './components/Alert';
import Buscador from './components/Buscador';


const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({message:'', color:''})
  
 




  return (
  <>
  <Container>
  <Row>
    <Col md={6}>
      <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores}/>
    </Col>
  </Row>
  <Row>
    <Col md={9}>
      <Listado colaboradores={colaboradores} setColaboradores={setColaboradores}/>
    </Col>
    <Col md={3}>
      <Formulario setAlert={setAlert} colaboradores={colaboradores} setColaboradores={setColaboradores}/>    
      { alert.message !== '' &&
          <Alert alert={alert}/>
      }     
    </Col>
    </Row>
    </Container>
  </>
  )
};

export default App

