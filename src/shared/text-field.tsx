import React from "react";
import MuiTextField from "@mui/material/TextField";
import { useField } from "formik";
import type { TextFieldProps } from "@mui/material/TextField";
import type { FieldHookConfig } from "formik";

function TextField(props: TextFieldProps & FieldHookConfig<string>) {
	const [field, meta] = useField(props);

	return (
		<MuiTextField
			{...field}
			{...props}
			error={meta.touched && Boolean(meta.error)}
			helperText={meta.touched && meta.error}
		/>
	);
}

export default TextField;
