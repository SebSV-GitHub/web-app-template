import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContextualMenu from "./contextual-menu/index.js";
import PostContext from "./context.js";

type Props = {
	readonly id: number;
	readonly title: string;
	readonly content: string;
};

function Post({ id, title, content }: Props) {
	const post = React.useMemo(
		() => ({
			id,
			title,
			content,
		}),
		[id, title, content]
	);

	return (
		<PostContext.Provider value={post}>
			<Paper>
				<Box
					p={3}
					sx={{
						position: "relative",
					}}
				>
					<Box
						m={1}
						sx={{
							position: "absolute",
							top: 0,
							right: 0,
						}}
					>
						<ContextualMenu />
					</Box>
					<Typography variant="h3">{title}</Typography>
					<Box mt={3}>
						<Typography component="p">{content}</Typography>
					</Box>
				</Box>
			</Paper>
		</PostContext.Provider>
	);
}

export default Post;
