import { useState } from 'react';
import { makePost } from '../API';

const CreatePostForm = ({token, fetchPosts}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);
  
  async function handleSubmit(e) {
    e.preventDefault();
    const post = {
      title,
      description,
      price,
      location,
      willDeliver
    }
    await makePost(post, token);
    setTitle('');
    setDescription('');
    setLocation('');
    setPrice('');
    setWillDeliver(false);
    fetchPosts();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Description</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>Location</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      <label>Price</label>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label>Will Deliver</label>
      <input type="checkbox" value={willDeliver} onChange={(e) => setWillDeliver(e.target.checked)} />
      <button type="submit">Create Post</button>
    </form>
  )
}

export default CreatePostForm;