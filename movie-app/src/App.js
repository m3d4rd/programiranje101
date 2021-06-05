import LandingPage from './components/LandingPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import LoginPage from './components/LoginPage'
import ErrorPage from './components/Footer'
import MovieDetailsPage from './components/MovieDetailsPage'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/filmi/:id" component={MovieDetailsPage}>
        </Route>
        <Route path='/prijava'>
          <LoginPage />
        </Route>
        <Route path='/'>
          <LandingPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
