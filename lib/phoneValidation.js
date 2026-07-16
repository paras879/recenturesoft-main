export function sanitizePhone(value) {
  if (!value) return "";
  return value;
}

export function validatePhone(value) {
  if (!value) return { valid: false, message: "Phone number is required." };
  if (typeof value !== "string") return { valid: false, message: "Invalid phone number." };
  if (!value.startsWith("+")) return { valid: false, message: "Phone must include a country code." };
  const digits = value.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return { valid: false, message: "Phone number has an invalid length." };
  return { valid: true, message: "" };
}

export function isPossiblePhoneNumber(value) {
  if (!value) return false;
  if (typeof value !== "string") return false;
  if (!value.startsWith("+")) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}
