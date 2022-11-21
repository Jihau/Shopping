import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ShoppingCart from './components/ShoppingCart';
import TaskApp from './Pages/Todos';

export default function App() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Shopping cart</Link>
                        </li>
                        <li>
                            <Link to="/todos">To do -list</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/">
                            <ShoppingCart />
                        </Route>
                        <Route path="/todos">
                            <TaskApp />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
}
