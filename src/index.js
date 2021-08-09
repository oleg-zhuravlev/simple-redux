// import { CreateStore } from './store/createStore.class';
import { createStore } from './store/createStore.function';
import { rootReducer } from './store/rootReducer';
import { initialState } from './store/initialState';
import './styles.css';

// const store = new CreateStore(rootReducer, initialState);
const store = createStore(rootReducer, initialState);

console.log(store);

console.log(store.getState());

store.dispatch({ type: 'TEST' });

console.log(store.getState());
