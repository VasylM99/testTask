import React from 'react';
import Users from './components/users';
import PostInputs from './components/postInputs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './components/posts';
import Comments from './components/comments';


function App() {
  return (
    <div className="App">
      <Router>

        <nav className='header'>
          <ul>
            <li>
              <Link to="/users">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch >
          <Route exact path="/users/:userId/posts/:id/comments" component={Comments} />
          <Route exact path="/users/:userId/posts/:id" component={PostInputs} />
          <Route exact path="/users/:id/posts" component={Posts} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
