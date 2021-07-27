const END_POINT = 'https://jsonplaceholder.typicode.com/comments';

const request = async () => {
  try {
    const res = await fetch(END_POINT);
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
