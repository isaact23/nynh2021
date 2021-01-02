import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from './components/Home';
import AddMessage from './components/AddMessage';

export default function App() {
  return (
      <Router>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/add_message">
              <AddMessage />
          </Route>
      </Router>
  );
}