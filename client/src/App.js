import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import { Provider } from './components/context/contextKosnice';
import NewKosnica from './components/NewKosnica';
import Index from './components/Index';
import DetaljiKosnica from './components/DetaljiKosnica';



function App() {
  return (
  <div className="container #ffb74d orange lighten-2">
    <Provider>
     <Router>
      <Switch>
      
        <Route exact path='/addNewKosnica' component={NewKosnica}/>    
       <Route exact path='/kosnica/:id' component={DetaljiKosnica}/>
        <Route exact path='/' component={Index}/>
        
      </Switch>

     </Router>
    </Provider>
  </div>
  );
}

export default App;
