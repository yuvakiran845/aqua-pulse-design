export const calculateAge = (dobValue: string): string => {
  if (!dobValue) return "";
  const dob = new Date(dobValue);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return String(age);
};

export const generateStudentId = (center: string, finalizedId?: string) => {
  if (finalizedId) return finalizedId;
  const centerCode = center.includes("R&R") ? "R&R" : "SL";
  return `APSA-2026-${centerCode}-XXXX`;
};
