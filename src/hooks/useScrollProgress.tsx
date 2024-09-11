"use client";
import { useState, useEffect } from "react";

export const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(parseFloat((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    //Event
    window.addEventListener("scroll", updateScrollCompletion);

    //Clear Event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};
