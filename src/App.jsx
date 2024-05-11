import "./App.css";
// import bootstrap lib
import "bootstrap/dist/css/bootstrap.min.css";
// include react icon lib

// include used routing components
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// include react bootstrap used components

// importing my child components
import Home from "./components/Home";
import Trending from "./components/Trending";
import Destinations from "./components/Destinations";
import Guide from "./components/Guide";
import Client from "./components/Client";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/travel-landing-page/">
          <Home />
        </Route>

        {/* <Route exact path="/trending">
          <Trending />
        </Route>
        <Route exact path="/destinations">
          <Destinations />
        </Route>
        <Route exact path="/Guide">
          <Guide />
        </Route>
        <Route exact path="/Client">
          <Client />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
