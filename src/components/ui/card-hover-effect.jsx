import { cn } from "@app/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 py-3", className)}>
      {items.map((item, idx) => (
        <div
          href={item?.year}
          key={item?.year}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex items-center justify-between">
              <h1 className="xl:text-xl md:text-lg text-base tracking-wide font-medium">
                {item.title}
              </h1>
              <span className="xl:text-sm text-xs text-white">{item.year}</span>
            </div>
            <p className="tracking-wider xl:text-lg text-base text-gray-300 mt-5">
              {item.description}
            </p>
            <span className="xl:text-base text-sm text-zinc-400 tracking-wider font-semibold">
              {item.gpa}
            </span>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
