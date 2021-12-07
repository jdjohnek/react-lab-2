import React, { useState } from "react";
import PostForm from './PostForm';
import PostInList from './PostInList';
import Post from "./Post";
import deleteButton from "./deleteButton";


function SocialPosts() {

    const oldPosts = [
        {
            title: 'Grand Circus',
            thought: 'Grand Circus is cool.',
        },
        {
            title: 'React',
            thought: 'React give me power'
        },
        {
            title: 'Beatrice',
            thought: 'My friend has mad skills!'
        }
    ]

    const [ postList, setPostList ] = useState(oldPosts);
    const [ open, setOpen ] = useState(false);

    const addPost = (oldPosts : Post) => {
        setPostList((prePostList) => {
            return [  ...prePostList, oldPosts  ];
        })
    };

    const deletePost = (i: number) => {
        setPostList((prevPostList) => {
            return [...prevPostList.slice(0, i), ...prevPostList.slice(i + 1)];
        })
        
    }
    

    return (
        <div>
        <div className='thoughts'>
            <h1>My Thoughts</h1>
            </div>

            <div className='thoughtButton'>
                <button className='newThought' onClick={ () => setOpen(true)}>New Thought</button>
            </div>

        <div className='postBox'>
            <p className='posted'>
            {postList.map(( oldPosts, i) => {
                return < PostInList
                    post={oldPosts}
                    onDelete={() => deletePost(i)}
                
                />
            })}
        </p>

        <div>
          { open && <PostForm onAdd={addPost} onClose={() => setOpen(false)} /> }
            </div>

        </div>
        </div>
        


        
    


    )




};

export default SocialPosts;