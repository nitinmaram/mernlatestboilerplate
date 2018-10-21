import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

// import {BrowserRouter as Router, Route} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App.jsx';
import './styles/index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Router history = {hashHistory}>
      <div>
          <Route exact path= '/' component={App}/>
      </div>
  </Router>,
  document.getElementById('root')
);
