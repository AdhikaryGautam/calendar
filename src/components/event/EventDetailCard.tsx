"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const EventDetailCard = () => {
  // Get current date info
  const currentDate = new Date();
  const day = currentDate.getDate();
  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const month = currentDate.toLocaleDateString("en-US", { month: "long" });
  const year = currentDate.getFullYear();

  // Example events - replace with your actual events data
  const events = [
    { time: "09:00 AM", title: "Team Meeting" },
    { time: "02:30 PM", title: "Project Review" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {weekday}, {month} {day}
        </CardTitle>
        <CardDescription>{year}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">{event.time}</div>
              <div className="font-medium">{event.title}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
