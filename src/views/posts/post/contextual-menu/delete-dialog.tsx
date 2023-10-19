import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "../../../../shared/loading-button.js";
import { useDeletePostMutation } from "../../../../services/api.js";
import postContext from "../context.js";

function DeleteDialog() {
	const [deletePost, { isLoading }] = useDeletePostMutation();
	const [isOpen, setIsOpen] = React.useState(false);
	const post = React.useContext(postContext);

	const handleClose = () => {
		if (!isLoading) {
			setIsOpen(false);
		}
	};

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleDelete = async () => {
		if (post) {
			await deletePost(post.id);
			handleClose();
		}
	};

	return (
		<>
			<MenuItem onClick={handleOpen}>
				<ListItemIcon>
					<DeleteIcon />
				</ListItemIcon>
				<ListItemText>Delete</ListItemText>
			</MenuItem>
			<Dialog open={isOpen} onClose={handleClose}>
				<DialogTitle>Delete {post?.title}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Are you sure you want to delete this post
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button disabled={isLoading} onClick={handleClose}>
						Cancel
					</Button>
					<LoadingButton isLoading={isLoading} onClick={handleDelete}>
						Delete
					</LoadingButton>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default DeleteDialog;
