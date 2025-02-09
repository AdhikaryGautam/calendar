import { ObjectDto } from "@/types/common.types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { CalendarNotes } from "./CalendarNotes";
import { NEPALI_MONTHS } from "@/constants/date.constants";

export const CalendarDetail = ({ data }: { data: ObjectDto }) => {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-40 max-w-[500px] min-w-[300px] divide-x">
      <EventDetailCard data={data} />
      <CalendarNotes data={data} />
    </div>
  );
};

const EventDetailCard = ({ data }: { data: ObjectDto }) => {
  return (
    <Card className="border-0 text-sm">
      <CardHeader className="p-0">
        <p className="font-medium">
          {NEPALI_MONTHS[Number(data?.month) - 1]} {data?.day}, {data?.year}
        </p>
      </CardHeader>
      <CardContent className="p-0 flex gap-1 mt-4 max-w-40 flex-wrap">
        {data?.events?.map((event: any, index: number) => (
          <span key={event?.jds?.en} className="group">
            {event?.jds?.en}
            {index !== data?.events?.length - 1 && (
              <span className="group-last:hidden">, </span>
            )}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};
