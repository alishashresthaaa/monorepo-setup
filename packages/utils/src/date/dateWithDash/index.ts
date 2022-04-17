import { format } from "date-fns";

export const dateWithDash = (date: any) => {
  const string = format(date, "yyyy-MM-dd");
  return string;
};
