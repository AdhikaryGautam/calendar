"use client";

import { WEEK_DAYS } from "@/constants/date.constants";
import { useCalendar } from "@/hooks/useCalendar";
import { ObjectDto } from "@/types/common.types";
import { splitDate } from "@/utils/date.utils";
import { CalendarButton, EmptyCalendarButton } from "./CalendarButton";
import { EventDetailCard } from "../event/EventDetailCard";

const Calendar = ({
  data,
  date,
}: {
  data: ObjectDto;
  date: { year: string; month: string };
}) => {
  const { monthData, startIndex } = useCalendar({ data, date });

  console.log({ startIndex });

  return (
    <div className="max-w-3xl">
      <div className="grid grid-cols-7 mb-4">
        {WEEK_DAYS.map((day) => (
          <div key={day} className="p-2 text-gray-400 text-sm text-center">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 bg-muted divide-y divide-x shadow">
        {monthData.map((day, index) => {
          if (!day)
            return (
              <EmptyCalendarButton
                key={`empty-${index}`}
                className="!border-0"
              />
            );

          const { day: dayInAD } = splitDate(day?.ad);
          const isHoliday = day?.week_day === 6;

          return (
            <CalendarButton
              key={`day-${index}`}
              className="h-20 flex flex-col items-center justify-center"
              mode={isHoliday ? "holiday" : "active"}
            >
              <span className="text-xl font-medium">{day.day}</span>
              <span className="text-[0.5rem]">{dayInAD}</span>
            </CalendarButton>
          );
        })}
      </div>

      <div className="mt-4">
        <EventDetailCard />
      </div>
    </div>
  );
};

export default Calendar;
