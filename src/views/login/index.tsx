import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper/";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField, { Format } from "../../shared/form/text-field.js";
import { useAuthenticateMutation } from "../../services/api.js";
import type Credentials from "../../types/credentials.js";
import LoadingButton from "../../shared/loading-button.js";
import useAppDispatch from "../../hooks/use-app-dispatch.js";
import { setToken } from "../../state/slices/auth.js";

const validationSchema = Yup.object({
	username: Yup.string().required(),
	password: Yup.string().required(),
});

function Login() {
	const dispatch = useAppDispatch();

	const [authenticate, { isLoading }] = useAuthenticateMutation();

	const handleSubmit = async (values: Credentials) => {
		try {
			const data = await authenticate(values).unwrap();
			dispatch(setToken(data.token));
		} catch {}
	};

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
						initialValues={{ username: "", password: "" }}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						<Form>
							<Stack spacing={2}>
								<Typography variant="h2">Login</Typography>
								<TextField
									format={Format.Text}
									name="username"
									label="Username"
									placeholder="johndoe"
								/>
								<TextField
									format={Format.Text}
									type="password"
									name="password"
									label="Password"
								/>
								<LoadingButton
									fullWidth
									type="submit"
									color="primary"
									variant="contained"
									size="large"
									isLoading={isLoading}
								>
									Login
								</LoadingButton>
							</Stack>
						</Form>
					</Formik>
				</Box>
			</Paper>
		</Container>
	);
}

export default Login;
