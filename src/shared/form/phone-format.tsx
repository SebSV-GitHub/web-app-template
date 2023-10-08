import React from "react";
import { PatternFormat } from "react-number-format";
import type { PatternFormatProps } from "react-number-format";

type CustomProps = {
	readonly onChange: (event: {
		target: { name: string; value: string };
	}) => void;
	readonly name: string;
};

const PhoneFormat = React.forwardRef<PatternFormatProps, CustomProps>(
	(props, ref) => {
		const { onChange, ...other } = props;
		return (
			<PatternFormat
				{...other}
				getInputRef={ref}
				format="(###) ### ####"
				mask="_"
				onValueChange={(values) => {
					onChange({
						target: {
							name: props.name,
							value: values.value,
						},
					});
				}}
			/>
		);
	}
);

export default PhoneFormat;
