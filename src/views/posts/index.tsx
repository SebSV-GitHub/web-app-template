import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useGetPostsQuery } from "../../services/api.js";
import Post from "./post.js";
import CreatePost from "./create-post/index.js";

function Posts() {
	const { data } = useGetPostsQuery();

	return (
		<Container>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item xs={12} md="auto">
					<Typography variant="h2">Posts</Typography>
				</Grid>
				<Grid item xs={12} md="auto">
					<CreatePost />
				</Grid>
			</Grid>
			<Stack mt={3} spacing={3}>
				{data?.map(({ id, title, content }) => (
					<Post key={`post-${id}`} title={title} content={content} />
				))}
			</Stack>
		</Container>
	);
}

export default Posts;
