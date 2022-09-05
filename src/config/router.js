import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../containers/About";
import Home from "../containers/Home";



function AppRouter() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </Router>
    )
}
export default AppRouter;