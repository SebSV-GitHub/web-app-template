import React from "react";
import type Post from "../../../types/post";

const postContext = React.createContext<Post | undefined>(undefined);

export default postContext;
