"use client";
import useIntersectionObserver from "@/hooks/intersectionObserverHook";
import { Box } from "@mui/material";
import React from "react";

const SlideInComponent = ({
  delay,
  children,
}: {
  delay?: number;
  children: React.ReactNode;
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 }) as [
    React.RefObject<null>,
    boolean
  ];
  return (
    <Box ref={ref}>
      <Box
        sx={{
          transition: "transform 0.4s ease-in-out, opacity 0.4s ease",
          opacity: isVisible ? 1 : 0,
          transitionDelay: delay ? `${delay}s` : undefined,
          transform: `translateX(${isVisible ? "0%" : "-20%"})`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SlideInComponent;
