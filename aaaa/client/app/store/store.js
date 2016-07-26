import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    if (module.hot) {
        module.hot.accept(() => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer.default || nextReducer);

            return true
        });
    }
    return store

}