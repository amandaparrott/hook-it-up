import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';
import Users from './Users';
import HomePage from './HomePage';
import UserId from './UserId';

const App = () => {
return(
   <div>
       <Router>
           <React.Fragment>
               <div className="container justify-content-center">
                   <div className="row col-12 justify-content-center">
                       <Link to="/">
                           <button type="button" className="btn btn-secondary shadow m-5">
                               Home
                           </button>
                           </Link>
                           <Link to="/users">
                               <button type="button" className="btn btn-secondary shadow m-5">
                                   Users
                               </button>
                           </Link>
                   </div>
               </div>
               <Switch>
                   <Route exact path="/" component={HomePage} />
                   <Route path="/users/:id" component={UserId}></Route> 
                   <Route path="/users" component={Users} />
               </Switch>
           </React.Fragment>
       </Router>
   </div>
);
}




export default App;
