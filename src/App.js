import './App.css';
import Appbar from './Components/Appbar';
import Homepage from './Components/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Forgotpage from './Components/Forgotpage';

function App() {
  return (
    <Router>
      <Appbar />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Signup />
        </Route>
        <Route path="/login/forgotpassword" exact>
          <Forgotpage />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
