const COHORT_NAME = '2302-ACC-PT-WEB-PT-E'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`)
    const result = await response.json();
    return result.data.posts;
  } catch (err) {
    console.error(err);
  }
}

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    const result = await response.json();
    return result.data.token;
  } catch (err) {
    console.error(err);
  }
}

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    const result = await response.json();
    return result.data.token;
  } catch (err) {
    console.error(err);
  }
}

export const makePost = async (post, token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

