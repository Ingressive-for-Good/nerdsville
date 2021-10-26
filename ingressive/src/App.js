import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./page/Register";
import Home from './page/Home';
import ProjectList from "./page/ProjectList"
import TeamChat from "./components/TeamChat";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/register" component={Register} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/projects' component={ProjectList} />
      <Route exact path='/chat' component={TeamChat} />
    </Switch>
  </Router>
  );
}

export default App;
