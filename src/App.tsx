import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { About } from './components/About';
import { Home } from './components/Home';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about/react/typescript'>About</Link></li>
            </ul>
            <hr />
            <Route exact path='/' component={Home} />
            <Route path='/about/:framework/:compiler' component={About} />
        </div>
    </BrowserRouter>,
    document.getElementById('example'),
);