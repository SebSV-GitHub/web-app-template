import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

const errorHandler: Middleware =
	(_api: MiddlewareAPI) => (next) => (action) => {
		if (isRejectedWithValue(action)) {
			enqueueSnackbar(action.payload.data.message as string, {
				variant: "error",
			});
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return next(action);
	};

export default errorHandler;
