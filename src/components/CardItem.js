import React from 'react';
import { Link } from 'react-router-dom';
import PostDetail from './PostDetail';

const CardItem = (props) => {

  console.log(props.id + 'next doc = ' + props.next)
  return (
    
      <li className='cards__item'>
        <Link className='cards__item__link' to={'/posts/' + props.id}>
          <figure className='cards__item__pic-wrap' data-category={props.post.label}>
            
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.post.background}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.post.text}</h5>
          </div>
        </Link>
      </li>
    
  );
}

export default CardItem;


/*const Post = (props) => {
  
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
} */


