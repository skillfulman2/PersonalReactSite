import React, { useEffect, useState } from "react";
import firebase from "./Firebase";
import { Link } from "react-router-dom";
import "./PostDetail.css";
import ReactMarkdownWithHtml from "react-markdown";


const PostDetail = (props) => {
  /*import parse from 'html-react-parser'*/

  const [post, setPost] = useState();
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);

  window.scrollTo(0, 0);

  useEffect(() => {
    firebase
      .firestore()
      .collection("posts")
      .doc(props.match.params.id)
      .onSnapshot((snapshot) => setPost(snapshot.data()));
  }, [props.match.params.id]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("posts")
      .orderBy("text")
      .get()
      .then((posts) => {
        const array = posts.docs.map((p) => p.id);
        const myPos = array.indexOf(props.match.params.id);
        setNext(myPos + 1 === array.length ? array[0] : array[myPos + 1]);
        setPrev(myPos === 0 ? array[array.length - 1] : array[myPos - 1]);
      });
  }, [props.match.params.id]);

  let styles = {};
  if (post) {
    styles = {
      parallax: {
        backgroundImage: "url(" + post.background + ")",
        height: "100vh",
        width: "100vw",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      },
    };
  }
  return (
    <main className="post-detail">
      {post ? (
        <div>
          <div style={styles.parallax}>
            <div className="parallax-overlay">
              <div>
                <h1>{post.title}</h1>
              </div>
            </div>
          </div>
          <div className="post-content">
            <div className="admin-actions pager">
              <Link to={"/posts/" + prev}>prev</Link>
              <Link to={"/posts/" + next}>next</Link>
            </div><br />
            <p>
              <b>{post.date.toDate().toString()}</b>
            </p><br />
            <div className="post-images"></div>
            <ReactMarkdownWithHtml children={post.text} allowDangerousHtml />
          </div>
        </div>
      ) : (
        <h2 style={{ width: "100vw", textAlign: "center" }}>
          Fetching post, hold on...
        </h2>
      )}
    </main>
  );
};
export default PostDetail;
