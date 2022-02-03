import React from "react";
import AdminHomePage from "../admin/page/AdminHomePage";
import LoginPage from "../admin/page/LoginPage";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import TopBar from "../admin/component/TopBar";  
import { useSelector } from 'react-redux';
const App  = () => { 
  const { isLoggedIn } = useSelector(store => ({
    isLoggedIn: store.isLoggedIn
  }));

    
    return (
      <div>
        <Router>
          <TopBar />
          <Switch>
             <Route exact path="/adminPanel" component={AdminHomePage} />  
            {!isLoggedIn && <Route path="/login" component={LoginPage} />}  
            <Redirect to="/" />
          </Switch>
        
        </Router> 
      </div>
    );
  
}

 

export default  App;