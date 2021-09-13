import React from 'react';
import Home from './components/Home';
import Gatos from './components/Gatos';
import Perros from './components/Perros';
import { Router, Route, browserHistory, IndexRoute } from "react-router-3";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
        <IndexRoute component ={Home}/>
          <Route path="/gatos" component={Gatos}/>
          <Route path="/perros" component={Perros}/>
        </Route>
      </Router>
    );
  }
}

export default App;
