import React from "react";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Form, Formik } from "formik";
import TextField, { Format } from "../../../shared/form/text-field.js";
import { usePostPostMutation } from "../../../services/api.js";
import LoadingButton from "../../../shared/loading-button.js";
import type Post from "../../../types/post.js";

const validationSchema = Yup.object({
	title: Yup.string().required(),
	content: Yup.string().required(),
});

function CreatePost() {
	const [postPost, { isLoading }] = usePostPostMutation();
	const [isOpen, setIsOpen] = React.useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		if (!isLoading) {
			setIsOpen(false);
		}
	};

	const handleSubmit = async (post: Omit<Post, "id">) => {
		try {
			await postPost(post);
			handleClose();
		} catch {}
	};

	return (
		<>
			<Button
				fullWidth
				disableElevation
				color="primary"
				variant="contained"
				size="large"
				startIcon={<AddIcon />}
				onClick={handleOpen}
			>
				Create post
			</Button>
			<Dialog open={isOpen} onClose={handleClose}>
				<Formik
					validationSchema={validationSchema}
					initialValues={{ title: "", content: "" }}
					onSubmit={handleSubmit}
				>
					<Form>
						<DialogTitle>Create a new post</DialogTitle>
						<DialogContent>
							<TextField
								fullWidth
								margin="dense"
								name="title"
								label="Title"
								placeholder="Lorem ipsum"
								format={Format.Text}
								disabled={isLoading}
							/>
							<TextField
								multiline
								fullWidth
								minRows={5}
								margin="dense"
								name="content"
								label="Content"
								placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nec felis quis volutpat. Aenean dictum eleifend massa vestibulum finibus. Cras luctus risus sed nisl pellentesque rutrum in sed lorem."
								format={Format.Text}
								disabled={isLoading}
							/>
						</DialogContent>
						<DialogActions>
							<Button disabled={isLoading} onClick={handleClose}>
								Cancel
							</Button>
							<LoadingButton isLoading={isLoading} type="submit">
								Create
							</LoadingButton>
						</DialogActions>
					</Form>
				</Formik>
			</Dialog>
		</>
	);
}

export default CreatePost;
