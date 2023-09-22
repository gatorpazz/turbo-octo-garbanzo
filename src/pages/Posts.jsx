import { useState, useEffect } from 'react';
import { fetchPosts } from '../API';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const posts = await fetchPosts();
      setPosts(posts);
    }
    fetchData();
  }, []);

  async function editPost() {
    // do a fetch call to PATCH /posts/:id
    // send the updated post data in the body
    // if successful, fetch all the posts again and set the state
  }
  return (
    <div>
      <h1>Posts</h1>
      {
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Author: {post.author.username}</p>
            <p>Location: {post.location}</p>
            <p>Price: {post.price}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Posts;