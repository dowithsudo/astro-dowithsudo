import { format, isValid } from "date-fns";

const dateFormat = (
  date: Date | string,
  pattern: string = "dd MMM, yyyy",
): string => {
  if (!date) return "";

  // Konversi ke objek Date
  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Validasi apakah objek Date tersebut valid
  if (!isValid(dateObj)) {
    console.warn(`Invalid date found: ${date}`);
    return ""; // Kembalikan string kosong alih-alih melempar RangeError
  }

  try {
    return format(dateObj, pattern);
  } catch (error) {
    return "";
  }
};

export default dateFormat;