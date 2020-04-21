import Preloader from './UI/Preloader/Preloader';
import * as serviceWorker from './serviceWorker';
import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import accountReducer from './store/reducers/accountReducer';
import contactReducer from './store/reducers/contactReducer';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/authReducer';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const App=lazy(()=>import('./containers/App'));

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
  auth:authReducer,
  account:accountReducer,
  contact:contactReducer
});

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<Preloader />}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Suspense>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();