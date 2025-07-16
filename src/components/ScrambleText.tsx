"use client";
import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export default function ScrambleText({ text, className }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hovering) return;

    let frame = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const interval = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, idx) => {
          if (idx < frame) return char;
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      setDisplay(scrambled);

      if (frame >= text.length) clearInterval(interval);
      frame += 1;
    }, 40);

    return () => clearInterval(interval);
  }, [hovering, text]);

  return (
    <span
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setDisplay(text);
      }}
      className={className}
    >
      {display}
    </span>
  );
}
