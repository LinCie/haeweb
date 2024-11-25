"use client";

import { ComponentProps, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CycleTextProps extends ComponentProps<"span"> {
  words: string[];
}

export default function CycleText({ words, className }: CycleTextProps) {
  const [index, setIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  const tempRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 1300);
    return () => clearInterval(interval);
  }, [words.length]);

  // Measure the longest word and set max width
  useEffect(() => {
    if (tempRef.current) {
      const longestWord = words.reduce((longest, word) =>
        word.length > longest.length ? word : longest,
      );
      tempRef.current.textContent = longestWord;
      setMaxWidth(tempRef.current.offsetWidth);
    }
  }, [words]);

  return (
    <div style={{ width: maxWidth }} className="relative inline-block">
      {/* Hidden element to calculate width */}
      <span
        ref={tempRef}
        className="invisible absolute whitespace-nowrap"
        aria-hidden="true"
      ></span>

      <AnimatePresence mode="wait">
        <motion.span
          key={`words_${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.08 }}
          className={cn("inline-block", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
