import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from "./Handler/ScrollToTop";
import * as serviceWorker from './serviceWorker';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import App from './Views/App';
import About from './Views/Pages/About'
import Artist from './Views/Pages/Artist'
import AnnaPage from './Components/PagesContents/Artist/PagesArtists/AnnaPage'
import MyrraPage from "./Components/PagesContents/Artist/PagesArtists/MyrraPage";
import Guests from "./Components/PagesContents/Guests";
import Join from "./Views/Pages/Join";
import Booking from './Views/Pages/Booking'
import Faq from './Views/Pages/Faq'
import Covid from './Views/Pages/Covid'
import NotFound from './Views/Pages/NotFound'

const routing = (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/about' component={About} />
                <Route exact path='/artist' component={Artist} />
                <Route exact path='/anna' component={AnnaPage} />
                <Route exact path='/myrra' component={MyrraPage} />
                <Route exact path='/guests' component={Guests} />
                <Route exact path='/join' component={Join} />
                <Route exact path='/booking' component={Booking} />
                <Route exact path='/faq' component={Faq} />
                <Route exact path='/covid-19' component={Covid} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
);



ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
