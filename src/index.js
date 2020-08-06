import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import App from './Views/App';
import About from './Views/Pages/About'
import Artist from './Views/Pages/Artist'
import Booking from './Views/Pages/Booking'
import Space from './Views/Pages/Space'
import Faq from './Views/Pages/Faq'
import NotFound from './Views/Pages/NotFound'

const routing = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/about' component={About} />
            <Route exact path='/artist' component={Artist} />
            <Route exact path='/booking' component={Booking} />
            <Route exact path='/space' component={Space} />
            <Route exact path='/faq' component={Faq} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
        </Switch>
    </BrowserRouter>
);



ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
