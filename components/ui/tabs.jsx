"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

/*
  Radix does not expose the current value to descendants, so Tabs mirrors it
  into a context. TabsTrigger uses that to decide which one owns the shared
  `layoutId` pill — Framer Motion then slides the pill between triggers
  instead of cross-fading two separate backgrounds.
*/
const TabsValueContext = React.createContext(null);

const Tabs = React.forwardRef(
  ({ value, defaultValue, onValueChange, ...props }, ref) => {
    // `isControlled` is latched on first render: reading it from the current
    // prop would let an uncontrolled Tabs flip to controlled on first select,
    // which Radix warns about.
    const isControlled = React.useRef(value !== undefined).current;
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue);
    const current = isControlled ? value : uncontrolled;

    const handleValueChange = React.useCallback(
      (next) => {
        if (!isControlled) setUncontrolled(next);
        onValueChange?.(next);
      },
      [isControlled, onValueChange]
    );

    return (
      <TabsValueContext.Provider value={current}>
        <TabsPrimitive.Root
          ref={ref}
          // uncontrolled Tabs with no defaultValue must stay uncontrolled
          {...(isControlled || current !== undefined
            ? { value: current }
            : { defaultValue })}
          onValueChange={handleValueChange}
          {...props}
        />
      </TabsValueContext.Provider>
    );
  }
);
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex h-auto rounded-md p-1", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(
  (
    { className, children, value, indicatorId = "tab-indicator", ...props },
    ref
  ) => {
    const reduce = useReducedMotion();
    const isActive = React.useContext(TabsValueContext) === value;

    return (
      <TabsPrimitive.Trigger
        ref={ref}
        value={value}
        className={cn(
          "relative inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg border p-3 text-base font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
          isActive
            ? "border-accent font-semibold text-primary"
            : "border-line bg-surface text-content-muted hover:bg-surface-2 hover:text-content",
          className
        )}
        {...props}
      >
        {isActive && (
          <motion.span
            layoutId={indicatorId}
            className="absolute inset-0 rounded-lg bg-accent"
            transition={reduce ? { duration: 0 } : spring}
          />
        )}
        <span className="relative z-10">{children}</span>
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("min-h-[480px] focus-visible:outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
