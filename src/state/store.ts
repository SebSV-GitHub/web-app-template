import { configureStore } from "@reduxjs/toolkit";
import api from "../services/api.js";
import auth from "./slices/auth.js";
import errorHandler from "./middlewares/error-handler.js";

const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth,
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat(api.middleware).concat(errorHandler);
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
