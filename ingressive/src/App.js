import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./page/Register";
import Home from './page/Home';
import Login from './page/Login';
import PrivateRoute from './config/privateRoute';
import { AuthProvider } from './config/auth';

function App() {
  return (
    <AuthProvider>
    <Router> 
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
  </AuthProvider>
  );
}

export default App;
