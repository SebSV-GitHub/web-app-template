import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
	value: number;
};

const initialState: CounterState = {
	value: 0,
};

const slice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
	},
});

export const { increment } = slice.actions;
export default slice.reducer;
