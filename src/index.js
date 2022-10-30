import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const feedback = (s = {feeling:0, understanding:0, support:0, comments:''}, a) => {
    switch(a.type) {
        case 'feelRating':
            return {...s, feeling:a.data}
        case 'understandRating':
            return {...s, understanding:a.data}
        case 'supportRating':
            return {...s, support:a.data}
        case 'commentAdd':
            return {...s, comments:a.data}
        case 'reset':
            return {feeling:0, understanding:0, support:0, comments:''}
        default:
            return s;
    }
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
