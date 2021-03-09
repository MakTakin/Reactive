import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './redux/reducers/rootReducer';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(applyMiddleware( thunk )))

const app = (
    <Provider store={ store }>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        { app }
    </React.StrictMode>,
    document.getElementById('root')
);

