import React, {useEffect, useState} from 'react'
import firebase from './Firebase'
import { Link } from 'react-router-dom'
import './PostDetail.css'
import parse from 'html-react-parser'

const PostDetail = (props) => { 
    
    const [post, setPost] = useState()
    const [prev, setPrev] = useState(0)
    const [next, setNext] = useState(0)
    console.log('-----------------')
    console.log(props)
    console.log('-----------------')
    console.log('hello')
    console.log(props.id)
    console.log(post)
    console.log(prev)
    console.log(useState(0).toString())

    window.scrollTo(0,0)

    useEffect( () => {
        firebase.firestore().collection('posts').doc(props.match.params.id)
            .onSnapshot( snapshot => setPost(snapshot.data()) )

    }, [props.id])

    useEffect(()=>{
        firebase.firestore().collection('posts')
            .orderBy('text')
            .get()
            .then( posts => {
                const array = posts.docs.map( p => p.id )
                const myPos = array.indexOf(props.match.params.id)
                setNext( myPos + 1 === array.length ? array[0] : array[myPos + 1])
                setPrev( myPos === 0 ? array[array.length - 1] : array[myPos - 1])
            } )
    }, [props.match.params.id])

    let styles = {}
    if(post){
        styles = {
            parallax:{
                backgroundImage: 'url(' + post.background + ')',
                height:'100vh',
                width:'100vw',
                backgroundAttachment:'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            },
        }
    } 
    return (
        <main className="post-detail">
            {
            post 
            ?
            <div>
                <div style={styles.parallax}>
                    <div className='parallax-overlay'>
                        <div>
                            <h1>{post.title}</h1>
                            <h1>{props.id}</h1>
                            {/*<p>{post.date}</p>*/}
                        </div>
                    </div>
                </div>
                <div className='post-content'>
                    <div className='admin-actions pager'>
                        <Link to={'/posts/' + prev}>prev</Link>
                        <Link to={'/posts/' + next}>next</Link>
                    </div>

                    <div className='post-images'>                    
                        {post.background && <img src={post.background} alt='hei' />}
                        {post.displayImage && <img src={post.displayImage} alt='hei' />}
                        {post.detailImage && <img src={post.detailImage} alt='hei' />}
                    </div>                    

                    <div>{parse(post.text)}{props.id}</div>
                    <div className='post-features'>
                        <ul>
                        {post.javascript && <li>Javascript</li>}
                        {post.reactjs && <li>React JS</li>}
                        {post.userOriented && <li>User oriented</li>}
                        {post.design && <li>Design</li>}
                        </ul>
                    </div>
                </div>
            </div>
            :
            <h2 style={{width:'100vw',textAlign:'center'}}>Fetching post, hold on...</h2>
            }
        </main>
    )
} 
export default PostDetail