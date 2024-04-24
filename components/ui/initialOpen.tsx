// myCustomHook.tsx
import { useState, useEffect, useRef } from "react";

interface AccordionItemProps {
  children: React.ReactNode;
  index: number;
}

export default function useInitialOpen(props: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(props.index === 0); // Initial open for first item
  const isFirstRender = useRef(true); // Track first render

  useEffect(() => {
    // Don't update on subsequent renders
    if (!isFirstRender.current) return;
    isFirstRender.current = false;

    // Set initial open state only on first render
    setIsOpen(props.index === 0);
  }, [props.index]);

  return { isOpen, setIsOpen };
}
