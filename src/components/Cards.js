import React, {useState, useEffect} from 'react'
import Firebase from './Firebase'
import './Cards.css';
import CardItem from './CardItem';

  const Cards = (props) => {
    const [posts, setPosts] = useState([])
  
    useEffect(() => {
        Firebase
            .firestore()
            .collection('posts')
            .orderBy('text')
            .limit(5)
            .onSnapshot(snapshot => 
                setPosts(snapshot.docs)
            )
    }, [])


  return (
    <div className='cards'>
      <h1>Check out my recent posts</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              posts.map(
                (doc, index) => 
                <CardItem 
                    next={posts[index < (posts.length -1) ? index + 1 : 0].id} 
                    prev={posts[index !==0 ? index -1 : posts.length -1].id} 
                    key={doc.id} id={doc.id} post={doc.data()} />
            )
            }
          
            {/*<CardItem
              src='https://lh3.googleusercontent.com/MKTga850LvPDPinmBc50maRlrSC5yH7CHhXixfRGx3obWalAqKGrdDNbrJYn_0eeyLLjNKI3168ukNBAgz8dBeCRrUSe-CepyiVznJA24UoCUQPyT0pvO3S0WJjqmKlvNwbpzOB2=w2400'
              text='A Happy Accident'
              label='Adventure'
              path='/posts/'
            />
            <CardItem
              src='https://lh3.googleusercontent.com/eWNEpzTRzFRlg5rZokafTO6v5WajKJaXJe0kK5h6tQV6HhCo2Kq9rA-ULjml59IiJuzBU8M8BlxhylNREgNSvJWJp0MWwye-0ZXd_benZ37ZM4jLE_UxoJ09Sa3N-aVgm6SdFzG4=w2400'
              text='My iPad Experience'
              label='Adventure'
              /*  path='/services'  
              path='posts/JkEo4MS2m6j555908A98'
            /> */}
            
          </ul>
          {/*<ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Hello World'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adventure'
              path='/sign-up'
            />
          </ul>*/}
        </div>
      </div>
    </div>
  );
}


export default Cards;

/* onst Posts = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      Firebase
          .firestore()
          .collection('posts')
          .orderBy('text')
          .limit(5)
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
} */
