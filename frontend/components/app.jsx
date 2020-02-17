import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import AuthContainer from "./authentication/auth_container";
import { Footer } from "./footer";
import BookShowContainer from "./content/book_show/book_show_container";
import TalkingPoints from "../components/signed_out_home/talking_points";

const App = () => (
  <div className="content">
    <AuthContainer/>
    
    <Switch>
      <Route exact path="/" component = {TalkingPoints}/>
      <Route exact path='/books/:bookId' component={BookShowContainer} />
    </Switch>

    <Route/>
    <Footer/>
  </div>
);

export default App;