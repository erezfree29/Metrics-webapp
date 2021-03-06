/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { store } from './app/redux/store';
import Premier from './components/Premier';
import SeriaA from './components/SeriaA';
import Homepage from './components/home';
import LaLiga from './components/Laliga';
import Bundesliga from './components/Bundesliga';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/bundes">
              <Bundes />
            </Route>
            <Route path="/priemier">
              <Pleague />
            </Route>
            <Route path="/seria">
              <Sera />
            </Route>
            <Route exact path="/laliga">
              <La />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function Pleague() {
  return <Premier />;
}

function Sera() {
  return <SeriaA />;
}

function Home() {
  return <Homepage />;
}

function La() {
  return <LaLiga />;
}

function Bundes() {
  return <Bundesliga />;
}

export default App;
