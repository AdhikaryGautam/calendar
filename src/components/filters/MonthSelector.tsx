import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NEPALI_MONTHS } from "@/constants/date.constants";
import { getCurrentNepaliDate } from "@/utils/date.utils";
import { useParams, useRouter } from "next/navigation";

export const MonthSelector = () => {
  const router = useRouter();

  const { year, month } = useParams();

  const currentDate = getCurrentNepaliDate();

  return (
    <Select
      onValueChange={(month) => {
        router.push(`/${year || currentDate.year}/${month}`);
      }}
      value={(month as string) || currentDate.month}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent>
        {NEPALI_MONTHS.map((month, index) => (
          <SelectItem
            key={month}
            value={(index + 1).toString().padStart(2, "0")}
          >
            {month}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
