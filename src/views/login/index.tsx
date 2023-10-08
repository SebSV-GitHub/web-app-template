import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper/";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "../../shared/text-field.js";

const validationSchema = Yup.object({
	username: Yup.string().required(),
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
						initialValues={{ username: "", password: "" }}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							console.log(values);
						}}
					>
						<Form>
							<Stack spacing={2}>
								<Typography variant="h2">Login</Typography>
								<TextField
									name="username"
									label="Username"
									placeholder="John Doe"
								/>
								<TextField name="password" label="Password" />
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
