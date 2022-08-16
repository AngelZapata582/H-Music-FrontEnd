import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilterTableMusic from "../admin/admin.js";
import Login from "../../js/login.js";
export default class RouterPaths extends React.Component{
    render(){
        return (
            <Router forceRefresh={true}>
                <Routes>
                    <Route exact path="/admin" element={<FilterTableMusic/>}/>
                    <Route render={() => <h1>404: Page Not Found</h1>}/>
                    <Route exact path="/login" element={<Login/>}/>
                </Routes>
            </Router>
        )
    }
}