import {  combineReducers, legacy_createStore } from 'redux';
import kanbanReducer from './reducers/Reducer';


const rootReducer=combineReducers({
    kanban:kanbanReducer
})


const store = legacy_createStore(rootReducer);

export default store;
