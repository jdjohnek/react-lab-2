import { useState } from "react";
import Post from "./Post";
import addClose from "./addClose";


function PostForm({  onAdd, onClose  } : addClose) {

    const [  title, setTitle  ] = useState('  ');
    const [  thought, setThought  ] = useState('  ')

    return (
            <div className='form-container'>
                <form onSubmit={  (e) => {
                    e.preventDefault();
                    onAdd({  title, thought  })
                }}>
                    <button className= 'closeButton' onClick={ () => onClose() }>Close</button>
                    <label className='titleThought' htmlFor="title">Title</label>
                    <input name='title' id='title' type="text" onChange={e => setTitle(e.target.value)}/>

                    <label className='thoughtText' htmlFor="thought">Thought</label>
                    <textarea name="thought" id="thought" onChange={e => setThought(e.target.value)}></textarea>
                    <button className='addPostButton' type='submit'>Add Post</button>

                </form>
            </div>

    )

};

export default PostForm;