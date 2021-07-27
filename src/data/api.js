const END_POINT = 'https://jsonplaceholder.typicode.com/comments';

const request = async (page) => {
  try {
    const res = await fetch(`${END_POINT}?_page=${page}&_limit=10`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error();
    }
    return data;
  } catch (e) {
    throw new Error(`오류입니다. ${e.message}`);
  }
};

export default request;
