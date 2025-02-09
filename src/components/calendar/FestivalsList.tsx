import { ObjectDto } from "@/types/common.types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { NEPALI_MONTHS } from "@/constants/date.constants";
import React from "react";

export const FestivalsList = ({ data }: { data: ObjectDto[] }) => {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto max-h-[400px]">
      {data.map((day, index) => {
        const month = NEPALI_MONTHS[Number(day?.month) - 1];

        if (!day?.events?.length) return null;

        return (
          <Card
            className="shadow px-3 py-2 text-sm"
            key={day?.year + day?.month + day?.day + index}
          >
            <CardHeader className="p-0">
              <p className="font-semibold">{`${month} ${day?.day}`}</p>
            </CardHeader>
            <CardContent className="p-0 flex gap-1 mt-2 flex-wrap">
              {day?.events?.map((event: any, index: number) => (
                <React.Fragment key={event?.jds?.en}>
                  <span className="group">{event?.jds?.en}</span>
                  {index !== day?.events?.length - 1 && (
                    <span className="group-last:hidden inline-flex items-center justify-center">
                      <span className="w-1 h-1 bg-primary rounded-full inline-block mx-1" />
                    </span>
                  )}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
