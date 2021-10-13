import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import AllDataProvider from "./context/AllDataProvider";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AllDataProvider>
      <AuthProvider>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/cart">
                <Cart></Cart>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </AllDataProvider>
  );
}

export default App;
