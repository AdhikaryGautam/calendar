export const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const NEPALI_MONTHS = [
  "Baisakh",
  "Jestha",
  "Asar",
  "Shrawan",
  "Bhadra",
  "Aswin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];

const INITIAL_YEAR = 2076;
export const AVAILABLE_YEARS = Array.from({ length: 7 }).map(
  (_, index) => INITIAL_YEAR + index
);
