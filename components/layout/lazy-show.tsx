"use client";

import { useInView } from "react-intersection-observer";
import React, { Suspense } from "react";

type LazyShowProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
};

const LazyShow = ({
  children,
  fallback = null,
  threshold = 0.01,
  rootMargin = "500px",
}: LazyShowProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  });

  return (
    <div ref={ref}>
      {inView ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
};

export default LazyShow;
