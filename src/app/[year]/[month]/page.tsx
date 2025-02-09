import Calendar from "@/components/calendar/Calendar";
import { getYearData } from "@/lib/api";
import { Suspense } from "react";

export default async function Page({
  params,
}: Readonly<{ params: { year: string; month: string } }>) {
  const { year, month } = params;

  const data = await getYearData(year);

  return (
    <Suspense>
      <Calendar data={data} date={{ year, month }} />
    </Suspense>
  );
}
