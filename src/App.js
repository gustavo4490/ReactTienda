import React from 'react';
import './assetss/css/App.css';
//Instalaciones
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Componentes
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Nuevo from './components/Nuevo';
import Editar from './components/Editar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/nuevo" component={Nuevo} />
        <Route exact path="/editar" component={Editar} />
      </Switch>
    </Router>
  );
}


export default App;
