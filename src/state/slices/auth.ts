import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
	token: string | undefined;
};

const initialState: AuthState = {
	token: undefined,
};

const slice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
		unsetToken(state) {
			state.token = undefined;
		},
	},
});

export const { setToken, unsetToken } = slice.actions;
export default slice.reducer;
