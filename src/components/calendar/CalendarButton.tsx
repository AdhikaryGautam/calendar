import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface CalendarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: "active" | "default" | "holiday";
  detailContent?: React.ReactNode;
}

export const CalendarButton = ({
  children,
  onClick,
  mode = "default",
  className,
  detailContent,
}: CalendarButtonProps) => {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "p-2 hover:bg-card-hover transition-all bg-card min-w-20",
          mode === "active" && "text-primary",
          mode === "holiday" && "text-error",
          className
        )}
        onClick={onClick}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent>{detailContent}</PopoverContent>
    </Popover>
  );
};

interface EmptyCalendarButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const EmptyCalendarButton = ({
  className,
  ...props
}: EmptyCalendarButtonProps) => {
  return <div className={cn("h-20 bg-muted", className)} {...props}></div>;
};
