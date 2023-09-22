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
