import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BS from "./Home/BS";
import BSC from "./Home/BSC";
import CarRental from "./Home/car";
import Home from "./Home/Home";
import InnovationNation from "./Home/innovationNation";
import Research from "./Home/Research";
import Titan from "./Home/Titan";

const Routes = () => {

    return (
        <Router basename="/">
            <Switch>
                <Route
                    path="/home"
                    component={() => {
                        return <Home />;
                    }}
                />
                 <Route
                    path="/bsc"
                    component={() => {
                        return <BSC />;
                    }}
                />
                <Route
                    path="/research"
                    component={() => {
                        return <Research />;
                    }}
                />
                <Route
                    path="/titanengschool"
                    component={() => {
                        return <Titan />;
                    }}
                />
                 <Route
                    path="/bands"
                    component={() => {
                        return <BS />;
                    }}
                />
                <Route
                    path="/carrental"
                    component={() => {
                        return <CarRental />;
                    }}
                />
                <Route
                    path="/inn-nation"
                    component={() => {
                        return <InnovationNation />;
                    }}
                />
            </Switch>
        </Router>
    )

}

export default Routes;