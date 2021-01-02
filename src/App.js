import './App.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from './components/Home'
import AddContent from './components/AddContent'

export default function App() {
  return (
      <Router>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/add_content">
              <AddContent />
          </Route>
      </Router>
  );
}