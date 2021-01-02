import './css/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home'
import AddContent from './components/AddContent'

export default function App() {
  return (
      <Router>
          <div>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/add_content">
                  <AddContent />
              </Route>
          </div>
      </Router>
  );
}