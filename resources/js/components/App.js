import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {ProtectedRoute} from './ProtectedRoute/ProtectedRoute';

import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Route path={'/app/login'}>
            <Login/>
          </Route>
          <Route path={'/app/register'}>
            <Register/>
          </Route>
          <ProtectedRoute
              exact path={'/app/dashboard'}
              component={Dashboard}
          />
        </BrowserRouter>
      </React.Fragment>
  );
}


export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App/>, document.getElementById('app'));
}