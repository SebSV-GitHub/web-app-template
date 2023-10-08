import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper/";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField, { Format } from "../../shared/form/text-field.js";

const validationSchema = Yup.object({
	phone: Yup.string().required(),
	password: Yup.string().required(),
});

function Login() {
	return (
		<Container
			sx={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Paper>
				<Box p={3}>
					<Formik
						initialValues={{ phone: "", password: "" }}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							enqueueSnackbar(JSON.stringify(values));
						}}
					>
						<Form>
							<Stack spacing={2}>
								<Typography variant="h2">Login</Typography>
								<TextField
									format={Format.Phone}
									name="phone"
									label="Phone"
									placeholder="555 123 4567"
								/>
								<TextField
									format={Format.Text}
									type="password"
									name="password"
									label="Password"
								/>
								<Button
									fullWidth
									type="submit"
									color="primary"
									variant="contained"
									size="large"
								>
									Login
								</Button>
							</Stack>
						</Form>
					</Formik>
				</Box>
			</Paper>
		</Container>
	);
}

export default Login;
