import { ObjectDto } from "@/types/common.types";

export const useCalendar = ({
  data,
  date,
}: {
  data: ObjectDto;
  date: { year: string; month: string };
}) => {
  const { year, month } = date;

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
  };
};
