import Post from "./Post";

interface deleteButton {
    post: Post,
    onDelete: ()  => void
};

export default deleteButton;