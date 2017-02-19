import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import './index.css';
import Home from './components/template/Home';
import Pinterest from './components/template/Pinterest';
import Project2 from './components/template/Project2';
import Project3 from './components/template/Project3';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="pinterest" component={Pinterest}/>
      <Route path="project2" component={Project2}/>
      <Route path="project3" component={Project3}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
