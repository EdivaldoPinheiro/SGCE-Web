import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import Privatecreen from "@/screens/PrivateScreen/Privatecreen";
// <AuthStack />
// <AppStack />
export default function AppNav(){
    return(
        <Router>
          <Routes>
            <Route path='/' element={<AppStack/>} />
            <Route path='/home' element={<AppStack/>}/>
            <Route path='/login' element={<AuthStack/>}/>
            <Route path='/private' element={<Privatecreen/>}/>
          </Routes>
        </Router>
    )
}