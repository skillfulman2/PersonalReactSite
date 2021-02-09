import React from 'react'
import Firebase from './Firebase'
import { Link, navigate } from "@reach/router"
import './Post.css'

const Post = (props) => {
    const deletePost= () => {
        if(window.confirm('sure?')){
            Firebase.firestore().collection('posts').doc(props.id).delete()
        }
    }
    return (
        
        <div className="post">
            {
            props.post.defaultImage &&
                <img src={props.post.defaultImage} alt='hei' />
            }
            <div className='post-inner' onClick={ () => navigate('/posts/' + props.id)}>
                <div>
                    <h1>{props.post.title}</h1>
                    <div className='post-byline'>{props.post.byline}</div>
                </div>
            </div>

            {props.signedIn && 
            <div className='admin'>
                <Link to={'/edit/' + props.id}><i class="fab fa-codepen"></i></Link>
                <i class="fas fa-trash-alt" onClick={deletePost}></i>
            </div>
            }
        </div>
    )
} 
export default Post