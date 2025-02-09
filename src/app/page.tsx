import Calendar from "@/components/calendar/Calendar";
import { getCurrentNepaliDate } from "@/utils/date.utils";

const getYearData = async (year: string) => {
  try {
    const res = await fetch(
      `https://miti.bikram.io/data/${year}-calendar.json`,
      {
        cache: "force-cache",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default async function Home(
  context: Readonly<{
    searchParams: { year: string; month: string };
  }>
) {
  const paramsYear = Number(context.searchParams.year);
  const paramsMonth = Number(context.searchParams.month);
  const isValidDate = !isNaN(paramsYear) && !isNaN(paramsMonth);

  const currentDate = getCurrentNepaliDate();

  const year = isValidDate ? context.searchParams.year : currentDate.year;
  const month = isValidDate ? context.searchParams.month : currentDate.month;

  const data = await getYearData(year);

  return (
    <main className="container mx-auto min-h-screen flex flex-col items-center justify-center">
      <Calendar data={data} date={{ year, month }} />
    </main>
  );
}
