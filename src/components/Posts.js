import React, {useState, useEffect} from 'react'
import Firebase from './Firebase'
import Post from './Post'
import './Posts.css' 
import { navigate } from '@reach/router'

const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Firebase
            .firestore()
            .collection('posts')
            .orderBy('text')
            .onSnapshot(snapshot => 
                setPosts(snapshot.docs)
            )
    }, [])

    const addPost = () => {
        Firebase.firestore().collection('posts').add({
            title: '',
            text: '',
            timestamp: Firebase.firestore.FieldValue.serverTimestamp()
        }).then(ref => {
            navigate('/edit/' + ref.id)
        }).catch( error => console.log(error))
    } 

    return (
        <main className='posts'>
        {
            props.signedIn &&
            <div className='admin-actions' onClick={addPost}>
                <i class="far fa-edit" className='edit-icon'></i>
            </div>
        }

        {
            posts.length > 0 
        ? 
        <div className='posts-container'>
            {
                posts.map(
                    (doc, index) => 
                    <Post 
                        next={posts[index < (posts.length -1) ? index + 1 : 0].id} 
                        prev={posts[index !==0 ? index -1 : posts.length -1].id} 
                        key={doc.id} id={doc.id} post={doc.data()} signedIn={props.signedIn}/>
                )
            }
        </div>
        :
            <p>Why Getting posts, hold on...</p>
        }
        </main>

    )
}

export default Posts