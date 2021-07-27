import React, { useState, useEffect, useCallback } from 'react';

const END_POINT = 'https://jsonplaceholder.typicode.com/comments';
const useFetch = (page) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //재사용
  const sendQuery = useCallback(async () => {
    const URL = `${END_POINT}?_page=${page}&_limit=10`;
    try {
      setIsLoading(true);

      const response = await (await fetch(URL)).json();
      if (!response) {
        throw new Error(`서버에 오류가 있습니다.`);
      }
      setList((prev) => [...new Set([...prev, ...response])]);
      setHasMore(response.length > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { hasMore, list, isLoading };
};
export default useFetch;
