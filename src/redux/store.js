import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

// root reducer file
import rootReducer from "./root-reducer";

// redux logger for dev tools
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
