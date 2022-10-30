import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const feedback = (s = {}, a) => {
    return s;
}

const storage = legacy_createStore(
    combineReducers({
        feedback
}),
applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storage}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
