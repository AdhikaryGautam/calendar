"use client";

import { WEEK_DAYS } from "@/constants/date.constants";
import { useCalendar } from "@/hooks/useCalendar";
import { ObjectDto } from "@/types/common.types";
import { splitDate } from "@/utils/date.utils";
import { MonthSelector } from "../filters/MonthSelector";
import { SearchFilter } from "../filters/SearchFilter";
import { YearSelector } from "../filters/YearSelector";
import { CalendarButton, EmptyCalendarButton } from "./CalendarButton";
import { CalendarDetail } from "./CalendarDetail";
import { FestivalsList } from "./FestivalsList";

const Calendar = ({
  data,
  date,
}: {
  data: ObjectDto;
  date: { year: string; month: string };
}) => {
  const { monthData, searchedDays, mode } = useCalendar({ data, date });

  return (
    <div className="w-1/2">
      <div className="mb-4">
        <SearchFilter />
      </div>

      {mode === "list" && (
        <div className="mb-4 w-full min-h-40">
          <h2 className="text-lg font-medium mb-2">Results</h2>
          <FestivalsList data={searchedDays} />
        </div>
      )}

      {mode === "calendar" && (
        <>
          <div className="flex justify-between items-center mb-6">
            <YearSelector />
            <MonthSelector />
          </div>

          <div className="grid grid-cols-7 mb-4">
            {WEEK_DAYS.map((day) => (
              <div key={day} className="p-2 text-gray-400 text-sm text-center">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 bg-muted divide-y divide-x shadow">
            {monthData.map((day) => {
              if (!day) {
                return (
                  <EmptyCalendarButton key={day?.day} className="!border-0" />
                );
              }

              const { day: dayInAD } = splitDate(day?.ad);
              const isHoliday = day?.week_day === 6;

              return (
                <CalendarButton
                  key={day?.day}
                  className="h-20 flex flex-col items-center justify-center"
                  mode={
                    isHoliday ? "holiday" : day?.is_today ? "active" : "default"
                  }
                  detailContent={<CalendarDetail data={day} />}
                >
                  <span className="text-xl font-medium">{day.day}</span>
                  <span className="text-[0.5rem]">{dayInAD}</span>
                </CalendarButton>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Calendar;
