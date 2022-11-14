import { format as dateFormatter } from "date-fns";

export const formatDate = (date: string) => {
  if (!date) return "N/A";
  return dateFormatter(new Date(date), `dd/MM/yyyy `);
};
