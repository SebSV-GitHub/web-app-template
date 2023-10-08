import React from "react";
import MuiTextField from "@mui/material/TextField";
import { useField } from "formik";
import type { TextFieldProps } from "@mui/material/TextField";
import type { FieldHookConfig } from "formik";
import PhoneFormat from "./phone-format.js";

export enum Format {
	Text,
	Phone,
}

type Props = {
	readonly format: Format;
};

const Formats = {
	[Format.Text]: {},
	[Format.Phone]: {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		inputComponent: PhoneFormat as any,
	},
};

function TextField(props: TextFieldProps & FieldHookConfig<string> & Props) {
	const [field, meta] = useField(props);

	return (
		<MuiTextField
			{...field}
			{...props}
			error={meta.touched && Boolean(meta.error)}
			helperText={meta.touched && meta.error}
			InputProps={Formats[props.format]}
		/>
	);
}

export default TextField;
