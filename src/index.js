import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Kayit from './Kayit';
import Store from './Store';
import Giris from './Giris'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <BrowserRouter>
        <Switch>
          <Route path="/app" exact strict component={() => <App/>}/> 
          <Route path="/" exact strict component={() => <Giris/>}/> 
          <Route path="/kayit" exact strict component={() => <Kayit/>}/> 
          <Giris/>
        </Switch>
      </BrowserRouter>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
