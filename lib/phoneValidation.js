export function sanitizePhone(raw) {
  if (!raw) return "";
  return String(raw).replace(/[^0-9]/g, "");
}

export function validatePhone(phone) {
  const cleaned = sanitizePhone(phone);
  if (!cleaned) return { valid: false, message: "Phone number is required." };
  if (cleaned.length < 10) return { valid: false, message: "Phone number must be at least 10 digits." };
  if (cleaned.length > 15) return { valid: false, message: "Phone number must not exceed 15 digits." };
  return { valid: true, message: "" };
}

export function filterNumericInput(value) {
  return value.replace(/[^0-9]/g, "");
}
