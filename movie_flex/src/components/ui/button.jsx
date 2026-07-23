import { cn } from "@/lib/utils";

function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };