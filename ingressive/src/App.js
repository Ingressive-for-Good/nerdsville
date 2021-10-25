import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./page/Register";
import Home from './page/Home';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/register" component={Register} />
      <Route exact path='/home' component={Home} />
    </Switch>
  </Router>
  );
}

export default App;
