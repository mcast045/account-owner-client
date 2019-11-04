import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import repositoryReducer from './Store/reducers/repositoryReducer';
import errorHandlerReducer from './Store/reducers/errorHandlerReducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const rootReducer = combineReducers({
    repository: repositoryReducer,
    errorHandler: errorHandlerReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));