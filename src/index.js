import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
  Route,
  IndexRedirect,
  browserHistory
} from 'react-router';

import './index.css';

import { auth, requireAuth } from './utils/auth';

import App from './App';

import { AuthPage } from './pages/auth-page/auth-page';

import { CoursesListPage } from './pages/courses-list/couses-list';
import { CoursesItemPage } from './pages/courses-item/courses-item';
import { CoursesNewPage } from './pages/courses-new/courses-new';

ReactDOM.render((
    <Router history={browserHistory}>

      <Route path="/" component={App} auth={auth}>
        <IndexRedirect to="/courses" />

        <Route path="/login" component={AuthPage} />

        <Route path="/courses" component={CoursesListPage} />
        <Route path="/courses/new" component={CoursesNewPage} onEnter={requireAuth} />
        <Route path="/courses/:id" component={CoursesItemPage}/>
      </Route>

    </Router>
  ), document.getElementById('root')
);
