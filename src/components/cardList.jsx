import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import 'intersection-observer';
import useFetch from 'hooks/useFetch';
import Card from 'components/card';
import Loading from 'components/loading';

const CardList = () => {
  const [pageNum, setPageNum] = useState(1);
  const { list, hasMore, isLoading } = useFetch(pageNum);
  const observerRef = useRef();

  const observer = (node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        setPageNum((page) => page + 1);
      }
    });

    node && observerRef.current.observe(node);
  };

  return (
    <CardListContainer>
      {list?.map((card) => (
        <Card key={card.id} {...{ card }} />
      ))}
      <div ref={observer} />
      <>{isLoading && <Loading />}</>
    </CardListContainer>
  );
};
export default CardList;

const CardListContainer = styled.div``;
