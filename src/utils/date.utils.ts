import { ADToBS, BSToAD } from "bikram-sambat-js";

export const getCurrentNepaliDate = () => {
  const nepaliDate = ADToBS(new Date());

  const str = nepaliDate.split("-");

  const year = str[0];
  const month = str[1];
  const day = str[2];

  return { year, month, day };
};

export const convertToADDate = (date: string) => {
  const adDate = BSToAD(date);

  const str = adDate.split("-");

  const year = str[0];
  const month = str[1];
  const day = str[2];

  return { year, month, day };
};

export const splitDate = (date: string) => {
  const str = date.split("-");

  return { year: str[0], month: str[1], day: str[2] };
};
