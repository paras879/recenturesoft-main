"use client";

import { useState, useCallback } from "react";
import { sanitizePhone, validatePhone } from "@/lib/phoneValidation";

export default function PhoneInput({
  value,
  onChange,
  onValidationChange,
  name = "phone",
  id,
  required = false,
  placeholder = "Enter phone number",
  label = "Phone Number",
  className = "",
  containerClassName = "",
  inputClassName = "",
  disabled = false,
  onFocus,
  onBlur,
}) {
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);

  const handleChange = useCallback((e) => {
    const raw = e.target.value;
    const cleaned = sanitizePhone(raw);
    setError("");
    onChange({ target: { name, value: cleaned } });
  }, [onChange, name]);

  const handleKeyDown = useCallback((e) => {
    const allowed = [
      "Backspace", "Delete", "Tab", "Escape", "Enter",
      "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
      "Home", "End",
    ];
    if (allowed.includes(e.key)) return;
    if (e.ctrlKey || e.metaKey) return;
    if (/^[0-9]$/.test(e.key)) return;
    e.preventDefault();
  }, []);

  const handlePaste = useCallback((e) => {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData("text");
    const cleaned = sanitizePhone(pasted);
    setError("");
    onChange({ target: { name, value: cleaned } });
  }, [onChange, name]);

  const handleFocus = useCallback((e) => {
    setFocused(true);
    onFocus?.(e);
  }, [onFocus]);

  const handleBlur = useCallback((e) => {
    setFocused(false);
    if (!value && !required) {
      setError("");
      onValidationChange?.(true);
      onBlur?.(e);
      return;
    }
    const result = validatePhone(value);
    setError(result.message);
    onValidationChange?.(result.valid);
    onBlur?.(e);
  }, [value, required, onValidationChange, onBlur]);

  return (
    <div className={`${containerClassName}`}>
      {label && (
        <label htmlFor={id || name} className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id || name}
        type="tel"
        name={name}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onFocus={handleFocus}
        onBlur={handleBlur}
        inputMode="numeric"
        pattern="[0-9]{10,15}"
        autoComplete="tel"
        maxLength={15}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all duration-200 ${error ? "border-red-400 dark:border-red-500" : ""} ${className} ${inputClassName}`}
      />
      {error && (
        <p className="text-xs text-red-500 dark:text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
}
