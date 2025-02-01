"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add("click");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("click");
    };

    const handleDragStart = () => {
      cursor.classList.add("click");
    };

    const handleDragEnd = () => {
      cursor.classList.remove("click");
    };

    const checkIfMobile = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        cursor.style.display = "none";
      } else {
        cursor.style.display = "block"; 
      }
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragend", handleDragEnd);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("dragend", handleDragEnd);
      
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return null;
}
