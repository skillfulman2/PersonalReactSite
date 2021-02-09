import React, {useState, useEffect} from 'react'
import Firebase from './Firebase'
import Viewpager from './Viewpager'
import PostDetail from './PostDetail'
import { navigate } from '@reach/router'
import '@reach/router'
import './PostsAnimated.css'

const PostsAnimated = (props) => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState()

    useEffect(() => {
        Firebase
            .firestore()
            .collection('posts')
            .orderBy('date', 'text')
            .onSnapshot(snapshot => {
                setId(snapshot.docs[0].id)
                setPosts(snapshot.docs)
            })
    }, [])

    const addPost= () => {
        Firebase.firestore().collection('posts').add({
            title: '',
            text: '',
            date: Firebase.firestore.FieldValue.serverTimestamp()
        }).then(ref => {
            navigate('/edit/' + ref.id)
        }).catch( error => console.log(error))
    } 

    const updateId = i => {
        console.log(i)
        if(posts){
            setId(posts[i].id)
        }
    }
 
    return (
        <main className='animated'>
        {
            posts.length > 0 
        ? 
            <>
            <Viewpager updateId={updateId} addPost={addPost} posts={posts} signedIn={props.signedIn}/>
            <PostDetail id={id}/>
            </>
        :
            <p>Getting posts, hold on...</p>
        }
        </main>

    )
}

export default PostsAnimated