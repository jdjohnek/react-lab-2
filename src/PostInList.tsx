import Post from "./Post";
import deleteButton from "./deleteButton";

function PostInList(  {post, onDelete}  : deleteButton ) {

    return (
            <div className= 'onePost'>
                <h1>{post.title}</h1>
                <p>{post.thought}</p>
                <button className= 'trashButton' onClick={onDelete}>Delete</button>
            </div>
    )

};

export default PostInList;