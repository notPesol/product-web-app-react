// Global style
import GlobalStyle from "./Global.style";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
