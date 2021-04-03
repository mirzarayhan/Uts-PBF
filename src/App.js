import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Keranjang from './Container/Keranjang';
import Daftar from './Container/Daftar';
import About from './Container/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App(){
  return (
    <Router>
      <div >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/home">Haryono Shop</a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/home" class ="nav-item nav-link">Home</Link>
                <Link to="/daftar" class ="nav-item nav-link" >Daftar</Link>
                <Link to="/keranjang" class ="nav-item nav-link">Keranjang</Link>
                <Link to="/about" class ="nav-item nav-link">About</Link>
              </div>
            </div>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path ="/home">
            <Home />
          </Route>
          <Route path ="/daftar">
            <Daftar />
          </Route>
          <Route path ="/keranjang">
            <Keranjang />
          </Route>
          <Route path ="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// tampilan publicpage/home
function Home(){
  return (
    <div>
      <div class="jumbotron">
        <center> 
          <h2>Selamat datang di Haryono Shop!</h2>
          <p>Toko Mesin Cuci dengan pengiriman tercepat di ALAM SEMESTA</p><br/><br/>
          <p><a class="btn btn-primary btn-lg" href="/daftar" role="button">Mulai Belanja !</a></p>
        </center>
      </div>
    </div>
  );
}

export default App;
