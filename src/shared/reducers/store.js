import { createStore, applyMiddleware } from "redux";
import createSagaMiddlerware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "../sagas";

const sagaMiddlerware = createSagaMiddlerware();

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddlerware));

sagaMiddlerware.run(rootSaga);

export default store;
