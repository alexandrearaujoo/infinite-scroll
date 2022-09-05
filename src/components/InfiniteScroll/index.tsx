import { useEffect, useRef } from "react";
import { IInfiniteScrollProps } from "../../interfaces";

const InfiniteScroll = ({ callback }: IInfiniteScrollProps) => {
  const divInfiniteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0) {
        callback();
      }
    });

    if (divInfiniteRef.current) {
      intersectionObserver.observe(divInfiniteRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiniteRef]);

  return <div ref={divInfiniteRef} />;
};

export default InfiniteScroll;
