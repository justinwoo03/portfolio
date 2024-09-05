"use client";

import { useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';
import { cn } from "@/lib/utils";
import Link from "next/link";

const TestNavbar = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <div
      className={clsx(
        'fixed top-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out bg-black-100 border border-white/100  shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.06)] rounded-full z-[5000]',
        {
          'scale-0 opacity-0 h-0': !visible,
          'scale-100 opacity-100 h-14 min-w-[320px] max-w-[80vw]': visible,
        },
        className // Apply custom class names
      )}
    >
      <ul className="flex items-center justify-center space-x-4 p-2 h-full">
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TestNavbar;