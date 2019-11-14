import React from 'react';
import {Route ,Switch , BrowserRouter} from 'react-router-dom';
import Layout from "./components/index.layout";
import LandingPAge from "./components/landingpage"
import AppLayout from "./components/appLayout";
import PrivateRoute from "./routing/private.routing"
import User from "./components/user";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Layout/>
      <Switch>
        <Route exact path="/" component={AppLayout}></Route>
        <PrivateRoute exact path="/app" Component={LandingPAge}/>
        <PrivateRoute exact path="/user" Component={User}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
