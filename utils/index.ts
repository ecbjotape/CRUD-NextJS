import { format as dateFormatter } from "date-fns";

export const formatDate = (date: string) => {
  return dateFormatter(new Date(date), `dd/MM/yyyy `);
};
