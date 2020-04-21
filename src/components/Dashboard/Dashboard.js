import React, { useState } from 'react';
import Sidebar from '../../components/AdminPanel/Sidebar/Sidebar';
import DashMain from '../../components/AdminPanel/DashMain/DashMain';
import { Switch, Route } from 'react-router';
import Analytics from '../../components/AdminPanel/Analytics/Analytics';
import Sells from '../../components/AdminPanel/Sells/Sells';
import { createContext } from 'react';
import 'semantic-ui-css/semantic.min.css';
import "./Dashboard.css";

export const DashBoardContext=createContext();

const Dashboard = ({history}) => {
    const [show,setShow]=useState(false);

    return (
        <div className="dashboard">
            <DashBoardContext.Provider value={{
                history,
                show,
                setShow
            }}>
            <Sidebar />
            <DashMain>
                <Switch>
                    <Route exact path="/dashboard/analytics" component={Analytics} />
                    <Route exact path="/dashboard/sells" component={Sells} />
                </Switch>
            </DashMain>
            </DashBoardContext.Provider>
        </div>
    );
}

export default Dashboard;
