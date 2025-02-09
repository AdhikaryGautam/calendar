import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AVAILABLE_YEARS } from "@/constants/date.constants";
import { getCurrentNepaliDate } from "@/utils/date.utils";
import { useParams, useRouter } from "next/navigation";

export const YearSelector = () => {
  const router = useRouter();

  const { year, month } = useParams();

  const currentDate = getCurrentNepaliDate();

  return (
    <Select
      onValueChange={(year) => {
        router.push(`/${year}/${month || currentDate.month}`);
      }}
      value={(year as string) || currentDate.year}
    >
      <SelectTrigger className="w-[90px]">
        <SelectValue placeholder="Year" />
      </SelectTrigger>
      <SelectContent>
        {AVAILABLE_YEARS.map((year) => (
          <SelectItem key={year} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
