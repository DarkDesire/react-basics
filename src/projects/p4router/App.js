import React from 'react';
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Post from './components/Post'
import PageNotFound from './components/PageNotFound'
import PageRestricted from './components/PageRestricted'
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restricted" component={PageRestricted} />
        <ProtectedRoute path="/about" component={About} />
        <ProtectedRoute path="/contact" component={Contact} />
        <ProtectedRoute path="/posts/:post_id" component={Post} />
        <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
