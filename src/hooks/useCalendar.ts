import { ObjectDto } from "@/types/common.types";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useCalendar = ({
  data,
  date,
}: {
  data: ObjectDto;
  date: { year: string; month: string };
}) => {
  const { month } = date;

  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const mode = searchParams.get("mode") ?? "calendar";

  const searchedDays = useMemo(() => {
    if (!search) return Object.values(data).flat();

    return Object.values(data)
      .flat()
      .filter((day) => {
        return day?.events?.some((event: any) =>
          event?.jds?.en?.toLowerCase().includes(search?.toLowerCase() ?? "")
        );
      });
  }, [search, data]);

  const monthData = data[month] as ObjectDto[];
  const startIndex = monthData?.[0]?.week_day;
  const monthDataWithStartEmptyButtons = [
    ...Array(startIndex).fill(null),
    ...monthData,
  ];
  const emptyButtons = 7 - (monthDataWithStartEmptyButtons.length % 7);
  const monthDataWithEmptyButtons = [
    ...monthDataWithStartEmptyButtons,
    ...Array(emptyButtons).fill(null),
  ];

  return {
    monthData: monthDataWithEmptyButtons,
    startIndex,
    searchedDays,
    mode,
  };
};
