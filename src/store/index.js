import { legacy_createStore as create_store, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import logger from "./middleware/logger";

const store = create_store(rootReducer, applyMiddleware(logger, thunk));

export default store;
