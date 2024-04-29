"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import { PropsWithChildren } from "react";
import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
  useRef,
} from "react";

interface AccordianProps {
  children: ReactNode;
  value: any;
  onChange?: (value: any) => void;
  className?: string;
}

interface AccordianItemProps {
  children: ReactNode;
  value: any;
  trigger: ReactNode;
}

const AccordianContext = createContext<{
  selected: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}>({
  selected: null,
  setSelected: () => {},
});

const Accordion: React.FC<AccordianProps> = ({
  children,
  value,
  onChange,
  ...props
}: AccordianProps) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  useEffect(() => {
    // Find the first AccordionItem child
    const firstItem = React.Children.toArray(children)?.[0];

    // If a first item exists and it's a valid element
    if (firstItem && React.isValidElement(firstItem)) {
      setSelected(firstItem.props.value);
    }
  }, [children]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
};

export function AccordianItem({
  children,
  value,
  trigger,
  ...props
}: AccordianItemProps) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <li className="border-b border-gray-300" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={`flex gap-3 items-center font-medium capitalize text-[12px] lg:text-[1.25rem] ${
          open
            ? " text-primary-20 py-2 lg:py-10"
            : "text-gray-40 py-6 lg:py-10"
        }`}
      >
        {trigger}
      </header>
      <div
        className={`overflow-y-auto transition duration-300 ease-in-out ${
          open ? "max-h-full" : "max-h-0"
        }`}
        ref={ref}
      >
        <div className="pb-8">{children}</div>
      </div>
    </li>
  );

}

export default Accordion;
