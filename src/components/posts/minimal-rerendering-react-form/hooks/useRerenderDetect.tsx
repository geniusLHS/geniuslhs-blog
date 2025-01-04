"use client";

import { useEffect, useRef, useState } from "react";

export default function useRenderNotifyAnchor() {
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const rerenderCountRef = useRef(0);

  useEffect(() => {
    if (elementRef == null) {
      return;
    }

    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current);
    }

    rerenderCountRef.current++;
    const colors = [
      "#38bdf8", // blue with 20% opacity
      "#4ade80", // green with 40% opacity
      "#facc15", // yellow with 60% opacity
      "#fb923c", // orange with 80% opacity
      "#ef4444", // red with 100% opacity
    ];

    const colorIndex = Math.min(rerenderCountRef.current - 1, colors.length - 1);
    elementRef.style.border = `2px solid ${colors[colorIndex]}`;
    timeoutRef.current = setTimeout(() => {
      rerenderCountRef.current = 0;
      elementRef.style.border = "2px solid #444444";
    }, 300);
  });

  return setElementRef;
}
