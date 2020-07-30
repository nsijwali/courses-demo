import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import createReducer from './reducers/rootReducer'
import './index.css';
import App from './App';

let middlewares = [thunk];
const composedEnhancers = compose;
if(process.env.NODE_ENV !== 'production') middlewares = [...middlewares]

const store = createStore(createReducer, composedEnhancers(applyMiddleware(...middlewares)));
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root')
);
