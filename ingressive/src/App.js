import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./page/Register";
import Home from './page/Home';
import ProjectList from "./page/ProjectList"
import TeamChat from "./components/TeamChat";
import Login from './page/Login';
import PrivateRoute from './config/privateRoute';
import { AuthProvider } from './config/auth';

function App() {
  return (
    <AuthProvider>
    <Router> 
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path='/projects' component={ProjectList} />
      <Route exact path='/chat' component={TeamChat} />
      <Route exact path='/login' component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
  </AuthProvider>
  );
}

export default App;
