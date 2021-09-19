import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import { App } from './app';
import { Eichenwalde } from './pages/Eichenwalde/Eichenwalde';
import { appHistory, appRoutes } from './routes';

const rootElement = document.getElementById('app-root');

ReactDOM.render(
    // <ThemeProvider theme={theme}>
    //   <Provider store={store}>
    <Router history={appHistory}>
        <App>
            <Switch>
                {appRoutes.map((route, index) => <Route key={index} path={route.path} component={route.component} exact={route.exact} />)}

                {/* TODO: Create a 404 not found page */}
                <Route key='*' path='*' exact={true} component={Eichenwalde} />
            </Switch>
        </App>
    </Router>
    //   </Provider>
    // </ThemeProvider>
    , rootElement);