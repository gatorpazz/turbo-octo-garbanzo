import { useState, useEffect } from 'react';
import { fetchPosts } from '../API';
import CreatePostForm from '../components/CreatePostForm';

const Posts = ({token}) => {
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    const posts = await fetchPosts();
    setPosts(posts);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(posts);
  async function editPost() {
    // do a fetch call to PATCH /posts/:id
    // send the updated post data in the body
    // if successful, fetch all the posts again and set the state
  }
  return (
    <div>
      <h1>Posts</h1>
      {token && <CreatePostForm token={token} fetchPosts={fetchData} />}
      {
        posts.map(({_id, title, description, author, location, price, willDeliver}) => (
          <div className="post" key={_id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Author: {author.username}</p>
            <p>Location: {location}</p>
            <p>Price: {price}</p>
            <p>Will Deliver: {String(willDeliver)}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Posts;