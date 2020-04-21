import React,{Component, Fragment, useEffect} from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import {authCheck} from "../store/actions/authAction";
import { Switch, Route, Redirect} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import './App.css';

class InnerApp extends Component{
  state={
    isShowedAddForm:false,
    isShowedContact:false,
  }
  render(){
    return (
        <div className="App">
              <Header
              showAddForm={()=>this.setState({isShowedAddForm:true})}
              showContact={()=>this.setState({isShowedContact:true})}
              />
              <Main 
              isShowedAddForm={this.state.isShowedAddForm}
              isShowedContact={this.state.isShowedContact}
              closeContact={()=>this.setState({isShowedContact:false})}
              closeAddForm={()=>this.setState({isShowedAddForm:false})}
              />
              <Footer
              showAddForm={()=>this.setState({isShowedAddForm:true})}
              showContact={()=>this.setState({isShowedContact:true})}
              />
        </div>
    );
  };
};

const App = () => {
  const dispatch=useDispatch();
  const {isAuth}=useSelector(state=>(state.auth));
  
  useEffect(()=>{
    dispatch(authCheck())
  },[dispatch,isAuth]);
  return (
    <Fragment>
      <Switch>
        <Redirect from="/exam-app" to="/" />
        <Route exact path="/" component={InnerApp} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} isAuth={isAuth}/>
      </Switch>
    </Fragment>
  );
}

export default App;