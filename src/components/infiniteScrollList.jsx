import React, { useState, useEffect } from 'react';

export const useInfiniteScroll = ({
  root = null,
  threshold = 0.1,
  rootMargin = '0px',
  onIntersect,
}) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      // onIntersect => device의 viewport나 특정 요소(옵션의 root)에 교차되었을때 callback 함수가 실행된다.

      observer.observe(target);
      // target 구독 시작
    }

    return () => observer && observer.disconnect();
  }, [target, root, rootMargin, threshold, onIntersect]);

  return [setTarget];
};
