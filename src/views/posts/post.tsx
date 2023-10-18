import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
	readonly title: string;
	readonly content: string;
};

function Post({ title, content }: Props) {
	return (
		<Paper>
			<Box p={3}>
				<Typography variant="h3">{title}</Typography>
				<Box mt={3}>
					<Typography component="p">{content}</Typography>
				</Box>
			</Box>
		</Paper>
	);
}

export default Post;
