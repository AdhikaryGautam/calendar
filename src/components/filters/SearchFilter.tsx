"use client";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Label } from "../ui/label";
import { debounce } from "@/utils/common.utils";

export const SearchFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const mode = searchParams.get("mode") ?? "calendar";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    router.push(`${pathname}?${createQueryString("search", value)}`);
  };

  return (
    <div className="border px-3 py-2 rounded flex justify-between items-center gap-6">
      {mode === "list" && (
        <Input
          placeholder="Search by festival name"
          className="w-[200px]"
          onChange={debounce(handleChange, 1000)}
        />
      )}

      <div className="flex items-center space-x-2 ml-auto">
        <Label htmlFor="view-mode">
          {mode === "calendar" ? "Calendar View" : "List View"}
        </Label>
        <Switch
          id="view-mode"
          checked={mode === "calendar"}
          onCheckedChange={(checked) => {
            router.push(
              `${pathname}?${createQueryString(
                "mode",
                checked ? "calendar" : "list"
              )}`
            );
          }}
        />
      </div>
    </div>
  );
};
