import { useMemo } from "react";

const useFormattedDate = (createdAt: string | undefined): string => {
  return useMemo(() => {
    if (!createdAt) {
      return "";
    }

    const dateObj = new Date(createdAt);

    if (isNaN(dateObj.getTime())) {
      return "";
    }

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}.${month}.${year}`;
  }, [createdAt]);
};

export default useFormattedDate;
