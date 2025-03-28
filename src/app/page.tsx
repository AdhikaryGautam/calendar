import Calendar from "@/components/calendar/Calendar";
import { getYearData } from "@/lib/api";
import { getCurrentNepaliDate } from "@/utils/date.utils";
import { Suspense } from "react";

export default async function Home() {
  const currentDate = getCurrentNepaliDate();

  const year = currentDate.year;
  const month = currentDate.month;

  const data = await getYearData(year);

  return (
    <Suspense>
      <Calendar data={data} date={{ year, month }} />
    </Suspense>
  );
}
