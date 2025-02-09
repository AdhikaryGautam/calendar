import { cn } from "@/lib/utils";

interface CalendarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: "active" | "default" | "holiday";
}

export const CalendarButton = ({
  children,
  onClick,
  mode = "default",
  className,
}: CalendarButtonProps) => {
  return (
    <button
      className={cn(
        "p-2 hover:bg-card-hover transition-all bg-card min-w-20",
        mode === "active" && "text-primary",
        mode === "holiday" && "text-error",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const EmptyCalendarButton = ({ className }: { className?: string }) => {
  return <div className={cn("h-20 bg-muted", className)}></div>;
};
