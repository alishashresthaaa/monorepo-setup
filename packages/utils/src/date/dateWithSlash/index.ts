import { format } from "date-fns";

export const dateWithSlash = (obj: string) => {
  const date = new Date(obj);
  const string = format(date, "MM/dd/yyyy");

  return string;
};
