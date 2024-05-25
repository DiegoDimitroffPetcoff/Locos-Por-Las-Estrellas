import {  sub, format } from "date-fns";

export function DaysFormater() {
  let day = new Date();
  let today = format(day, "yyyy-MM-dd");
  let fiveDaysAgo = format(sub(day, { days: 5 }), "yyyy-MM-dd");
  return { today, fiveDaysAgo };
}
